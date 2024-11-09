const asyncHandler = require('express-async-handler')
const Lesson = require('../models/lessonModel')
const generateLesson = require('../services/lessonService')

// @desc Get lessons
// @route GET /api/lessons
// @access Private
const getLessons = asyncHandler(async (req,res) => {
    const lessons = await Lesson.find()
    res.status(200).json(lessons)
})

// @desc Create a lessons
// @route POST /api/lessons
// @access Private
const createLesson = asyncHandler(async (req,res) => {
    
    const generatedText = (await generateLesson()).choices[0].message.content;


    const lesson = await Lesson.create({
        text: generatedText
    })

    res.status(200).json(lesson)
})

// @desc Edit a lesson
// @route PUT /api/lessons/:id
// @access Private
const editLesson = asyncHandler(async (req, res) => {
    const lesson = await Lesson.findById(req.params.id)

    if(!lesson) {
        res.status(400)
        throw new Error('Lesson not found')
    }

    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// @desc Delete a lesson
// @route DELETE /api/lessons/:id
// @access Private
const deleteLesson = asyncHandler(async (req, res) => {

    const lesson = await Lesson.findById(req.params.id)

    if(!lesson) {
        res.status(400)
        throw new Error('Lesson not found')
    }

    await Lesson.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getLessons,
    createLesson,
    editLesson,
    deleteLesson
}