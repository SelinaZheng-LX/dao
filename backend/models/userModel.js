const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },
    isTeacher: {
        type: String,
        // required: [false, "Please indicate whether you are a student or teacher"]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)