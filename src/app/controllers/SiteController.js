const Course = require('../models/Course')

const {multiObject} = require('../../util/changeObject')


class SiteController {
    search(req, res) {
        /* res.json(req.query)  */
        res.render('search'); 
    }

    contact(req, res) {
        res.render('contact');
    }

    result(req, res, next){
        console.log('hallo')
        console.log(req.body)
        console.log('hallo')

        /* const result = req.payload
        res.render('result', {result}) */
    }

    home(req, res, next) {

        Course.find({})
            .then((courses)=> {
                /* res.json(courses) 
                courses = courses.map(course => course.toObject())*/
                res.render('home', {courses:multiObject(courses) })
            })
            .catch(next)

        
        /* Course.find({})
            .then((courses)=> {
                res.render('home', {courses});
            })
            .catch(next) */
        
    }
}

module.exports = new SiteController();
