const express = require('express')
const app = express()
const path = require('path')
const pool = require("./db")
const morgan = require('morgan')
const cors = require("cors")
const bodyParser = require('body-parser')
require('dotenv').config
app.use(morgan('dev'))
app.use(express.static('./public'))

// Middlewares
app.use(cors())
app.use(express.json()) // Lets us access req.body
app.use(express.urlencoded({ extended: false }))

//Routes//

// create a todo

app.post("/todos", async (req, res) => {
 try {
  const { description, fname, date } = req.body;

  const newTodo = await pool.query("UPDATE todos.todo SET fname = $1 WHERE todo_id = 1", [ fname ])
  console.log(fname)
 } catch (error) {
  console.error(error.message)

 }

})

// Employee will confirm the booking of a customer after they arrive
app.post("/booking-confirm", async (req, res) => {
 try {
  const { start, end, room } = req.body;

  const newTodo = await pool.query("UPDATE ehotel.room SET status = 'rented',  start_date = $1 , end_date = $2 WHERE room_num = $3  ", [ start, end, room ])
  res.send("The Renting for the customer has been confirmed")
 } catch (error) {
  console.error(error.message)

 }

})


// get all todos 
app.get("/todos", async (req, res) => {
 try {
  const allTodos = await pool.query("SELECT * FROM ehotel.room WHERE status = 'booked'")
  res.json(allTodos.rows)

 } catch (error) {
  console.error(error.message)

 }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
 console.log(`Server has started on PORT ${PORT}`)

})