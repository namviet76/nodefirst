
const mongoose = require('mongoose')

async function connect(){
    try {
const hostname = 'render'
        //mongodb+srv://vtp5339:thanhphan76@cluster0.my7p3yr.mongodb.net/nodejs
        //mongodb+srv://vtp5332:thanhphan76@cluster0.fbqwsig.mongodb.net/thanhdb'
        //mongodb+srv://vtp5339:thanhphan76@cluster0.my7p3yr.mongodb.net/
        await mongoose.connect('mongodb+srv://vtp5332:thanhphan76@cluster0.fbqwsig.mongodb.net/thanhdb',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully')
    } catch (error) {
        console.log('connect false')
        
    }
}

module.exports = {connect}


