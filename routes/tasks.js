const express = require("express");
const router = express.Router();

const tasks = [
  {
    id: 1,
    title: "Fazer trabalho de redes",
    completed: false,
  },
  {
    id: 2,
    title: "Limpar a varanda",
    completed: true,
  },
  {
    id: 3,
    title: "Levar o cachorro para passear",
    completed: false,
  }
]

router.get('/', (req , res) => {
  res.json(tasks)
})

router.get('/:id', (req , res) => {
  const { id } = req.params
  res.json(tasks[id - 1])
})

router.post("/", (req , res) => {
  const newTask = req.body
  res.status(201).json({
    NovaTask: newTask 
  })
})

router.put("/:id", (req , res) => {
  const { id } = req.params
  const updatedTask = req.body
  res.json({
    data: updatedTask
  })
})

router.delete("/:id",(req , res) => {
  const { id } = req.params
  res.json({message: `Task ${id} deletada`})
})

module.exports = router