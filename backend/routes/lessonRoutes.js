const express = require('express')
const router = express.Router()
const { getLessons, createLesson, editLesson, deleteLesson } = require('../controllers/lessonController')

router.route('/').get(getLessons).post(createLesson)

router.route('/:id').put(editLesson).delete(deleteLesson)

module.exports = router