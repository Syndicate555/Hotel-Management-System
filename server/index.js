const express = require('express')
const app = express()
const PORT = 5000
const pool = require("./db")
const cors = require("cors")
require('dotenv').config
// Middlewares
app.use(cors())
app.use(express.json()) // Lets us access req.body

//Routes//

// create a todo

app.post("/todos", async (req, res) => {
 try {
  const { description } = req.body;

  console.log(description)
  const newTodo = await pool.query("INSERT INTO todos.todo (description) VALUES($1)", [ description ])
  res.json(newTodo)

 } catch (error) {
  console.error(error.message)

 }

})

app.listen(PORT, () => {
 console.log(`Server has started on PORT ${PORT}`)

})