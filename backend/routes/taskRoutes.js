const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.get('/', (req, res) => {
    Task.find()
        .sort({ date: -1 })
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ error: "Tasks not found!"}))
});

router.get('/:id', (req, res) => {
    Task.findById({ _id: req.params.id })
        .then(task => res.json(task))
        .catch(err => res.status(404).json({ error: "Woops something went wrong!" }))
})

router.post('/', (req, res) => {
    const newTask = new Task(req.body);
    newTask.save()
        .then(task => res.json(task))
        .catch(err => res.json({ error: 'Something went wrong!'}))
})

router.post('/:id', (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(task => res.json(task))
        .catch(err => res.json({ error: 'Something went wrong!' }))
})

router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete({ _id: req.params.id })
        .then(task => res.json(task._id))
        .catch(err => res.json({ error: 'Something went wrong!' }))
})



module.exports = router;