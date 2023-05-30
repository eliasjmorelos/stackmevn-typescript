import { Router } from 'express'
import Task from '../models/Task';

const router = Router()

router.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks)
    res.send(tasks)
});

router.post("/tasks", async (req, res) => {
    const { title, description } = req.body
    const task = new Task({ title, description })
    console.log(task)
    await task.save()
    res.json(task)
});

router.get("/task/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task) return res.status(404).json({message: "Task not found"})
        res.send(task)
    } catch (error) {
        return res.status(500).send(error)
    }

});

router.delete("/task/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({message: "Task not found"})
        return res.json(task)
    } catch (error) {
        return res.status(500).send(error)
    }
   
});

router.put("/task/:id", async (req, res) => {
    const updatedTask  = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.json(updatedTask)
});


export default router
