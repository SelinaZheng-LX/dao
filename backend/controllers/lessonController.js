const asyncHandler = require('express-async-handler')

// @desc Get lessons
// @route GET /api/lessons
// @access Private
const getLessons = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'Get lessons'})
})

// @desc Create a lessons
// @route POST /api/lessons
// @access Private
const createLesson = asyncHandler(async (req,res) => {
    
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Create a lesson'})
})

// @desc Edit a lesson
// @route PUT /api/lessons/:id
// @access Private
const editLesson = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Edit lesson ${req.params.id}`})
})

// @desc Delete a lesson
// @route DELETE /api/lessons/:id
// @access Private
const deleteLesson = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Edit lesson ${req.params.id}`})
})

module.exports = {
    getLessons,
    createLesson,
    editLesson,
    deleteLesson
}