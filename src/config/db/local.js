
const mongoose = require('mongoose')

async function connect(){
    try {
const hostname = 'render'
        
        await mongoose.connect('mongodb+srv://vtp5330:thanhphan76@cluster0.6zftsl6.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully')
    } catch (error) {
        console.log('connect false')
        
    }
}

module.exports = {connect}


