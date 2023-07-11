
const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://vtp5339:thanhphan76@cluster0.my7p3yr.mongodb.net/nodejs',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully')
    } catch (error) {
        console.log('connect false')
        
    }
}

module.exports = {connect}


