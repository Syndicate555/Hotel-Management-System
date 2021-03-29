const express = require('express')
const app = express()

const pool = require("./db")
const morgan = require('morgan')
const cors = require("cors")
require('dotenv').config
app.use(morgan('combined'))

// Middlewares
app.use(cors())
app.use(express.json()) // Lets us access req.body

//Routes//

// create a todo

app.post("/todos", async (req, res) => {
 try {
  const { description, fname, date } = req.body;

  console.log(description)
  const newTodo = await pool.query("INSERT INTO todos.todo (description,fname,date_entry) VALUES($1,$2,$3)", [ description, fname, date ])
  console.log(description)
  res.json(newTodo)


 } catch (error) {
  console.error(error.message)

 }

})


// get all todos 
app.get("/todos", async (req, res) => {
 try {
  const allTodos = await pool.query("SELECT * FROM todos.todo")
  res.json(allTodos.rows)

 } catch (error) {
  console.error(error.message)

 }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
 console.log(`Server has started on PORT ${PORT}`)

})