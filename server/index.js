const express = require('express')
const app = express()
const path = require('path')
const fetch = require("node-fetch");
const axios = require('axios').default;
const pool = require("./db")
const morgan = require('morgan')
const cors = require("cors")
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
  console.log(req.body)
 } catch (error) {
  console.error(error.message)

 }

})


// get all todos 
app.get("/rooms", async (req, res) => {
 try {
  const allRooms = await pool.query("SELECT * FROM ehotel.room WHERE status = 'available'")
  res.json(allRooms.rows)
 } catch (error) {
  console.error(error.message)
 }
})

// For employees to view all the rooms that are booked and rented
app.get("/all-rooms", async (req, res) => {
 try {
  const allRooms = await pool.query("SELECT * FROM ehotel.room where status = 'booked'or status = 'available'")
  res.json(allRooms.rows)
 } catch (error) {
  console.error(error.message)
 }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
 console.log(`Server has started on PORT ${PORT}`)

})
// const xhttp = new XMLHttpRequest();
// xhttp.open("GET", "http://localhost:3000/rooms", false);
// xhttp.send();
// const rooms = xhttp.responseText;
// console.log(rooms)

// axios.get('http://localhost:3000/rooms')
//  .then(function (response) {
//   console.log(response.json())
//  })
//  .catch(function (error) {
//   // handle error
//   console.log(error);
//  })

const getRooms = async () => {
 try {
  const response = await fetch("http://localhost:3000/rooms");
  const jsonData = await response.json();

  console.log(jsonData)
 } catch (err) {
  console.error(err.message);
 }
}
