const mongoose = require('mongoose')

const lessonSchema = mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        role: 'Teacher'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Lesson', lessonSchema)