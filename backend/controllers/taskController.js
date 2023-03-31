const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).send("Get all tasks failed with an error message: ", error);
    }
};

const getOneTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).send("Get one task failed with an error message: ", error);
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).send("Create task failed with an error message: ", error);
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).send("Update task failed with an error message: ", error);
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).send("Delete task failed with an error message: ", error);
    }
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask
};