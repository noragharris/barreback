const express = require('express')
const router = express.Router()
const { createExercise } = require('../domain/exercises/createExercise')
const Exercise = require('../models/Exercise')

router.get('/', (req, res) => {
  res.send('exercise route')
})

// Create a new Exercise
//todo validation of entry
//todo reduce duplicate exercises
router.post('/', async (req, res) => {
  try {
    const exerciseFields = createExercise(req)
    newExercise = new Exercise(exerciseFields)
    await newExercise.save()
    res.json(newExercise)
  } catch (err) {
    console.log(err)
    res.sendStatus(500).send('Server Error')
  }
})

module.exports = router