
const mongoose = require('mongoose')

async function connect(){
    try {
const hostname = 'render'
        
        await mongoose.connect('mongodb+srv://vtp5332:thanhphan76@cluster0.fbqwsig.mongodb.net/',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully')
    } catch (error) {
        console.log('connect false')
        
    }
}

module.exports = {connect}


