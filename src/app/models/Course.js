const mongoose = require('mongoose')
const schema = mongoose.Schema
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const Course = new schema({
    name: {type: String, require},
    description: {type: String},
    image: {type: String},
    videoId: {type:String},
    slug: {type: String, slug: 'name', unique: true},
    level: {type: String}

}, {timestamps: true})

module.exports = mongoose.model('Course', Course)