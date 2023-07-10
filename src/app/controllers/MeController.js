const course = require('../models/Course')
const {multiObject} = require('../../util/changeObject')


class MeController {
    storedCourses(req, res,next){
        course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {courses:multiObject(courses) })
            })
            .catch(next)
    }
}

module.exports = new MeController()