const { mongoose } = require('mongoose')

const tryConnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongo')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { tryConnect }