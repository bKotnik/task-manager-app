const express = require("express");
const { getAllTasks, getOneTask, createTask, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router();

// alternative, but for me its clearer to register each route one by one
// router.route("/").get(getAllTasks).post(createTask);

router.get("/", getAllTasks);
router.get("/:id", getOneTask);

router.post("/", createTask);

// patch if you need to update only some properties of an object
// router.patch("/:id", updateTask);

// put if you want to update the whole object- Here you NEED to pass the whole object
router.put("/:id", updateTask);

router.delete("/:id", deleteTask)

module.exports = router;