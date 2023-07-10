module.exports = {
    multiObject: function(courses){
        return courses.map(course => course.toObject())
    },
    object: function(course){
        return course ? course.toObject() : course
    }
}