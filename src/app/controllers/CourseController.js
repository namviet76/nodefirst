const Course = require('../models/Course')
const {object} = require('../../util/changeObject')

class CourseController {
    
    index(req, res, next){
        return res.render('home')
    }
    detail(req, res, next){
        res.json(req.params)
        /* Course.find({})
        return res.render('detail') */
    }

    show(req, res, next){
        Course.findById({_id: req.params.id})
            .then(course => {
                res.render('courses/show', {course:object(course) })
            })
        
        
    }

    // Get /courses/create
    create(req, res, next){
        res.render('courses/create')
    }


    

    //[get] /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then((course)=> res.render('courses/edit', {course:object(course)} ))
            .catch((next)=> console.log('store is fail'))
    }

    //put /:id/update
    update(req, res, next){
        
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
        

       
    }


    //Post /courses/store
    store(req, res, next){
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
        const course = new Course(req.body)

        course.save()
            .then(()=> res.redirect('/'))
            .catch((next)=> console.log('store is fail'))

       
    }

    delete(req, res, next){
        
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
        

       
    }
}

module.exports = new CourseController()