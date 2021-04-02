const express = require('express')
const app = express()
const path = require('path')
const fetch = require("node-fetch");
const axios = require('axios').default;
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


// API endpoints
//Routes//

// Employee will confirm the booking of a customer after they arrive
app.post("/booking-confirm", async (req, res) => {
 try {
  const { start, end, room } = req.body;
  const newRent = await pool.query("UPDATE ehotel.room SET status = 'rented',  start_date = $1 , end_date = $2 WHERE room_num = $3  ", [ start, end, room ])
  res.send("The Renting for the customer has been confirmed")
  res.redirect("http://localhost:4545/")
  console.log(req.body)
 } catch (error) {
  console.error(error.message)

 }
})

// Employee rents a room for a walk in customer
app.post("/customer-register", async (req, res) => {
 try {
  const { sin, fname, lname, city, country, room, start, end, } = req.body;
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  const rdate = year + "-" + month + "-" + date
  const newCustomer = await pool.query("INSERT into ehotel.customer (ssn_sin,fname,lname,registration_date,city,country) values($1,$2,$3,$4,$5,$6)  ", [ sin, fname, lname, rdate, city, country ])
  const newRent = await pool.query("UPDATE ehotel.room SET status = 'rented', pending_balance = 'true', start_date = $1 , end_date = $2 WHERE room_num = $3  ", [ start, end, room ])
  res.send("The Customer has been registered!")
  console.log(req.body)
 } catch (error) {
  console.error(error.message)
 }
})


// Customer books the room online
app.post("/customer-booking", async (req, res) => {
 try {
  const { sin, fname, lname, city, country, room, start, end, } = req.body;
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();
  const rdate = year + "-" + month + "-" + date
  const newCustomer = await pool.query("INSERT into ehotel.customer (ssn_sin,fname,lname,registration_date,city,country) values($1,$2,$3,$4,$5,$6)  ", [ sin, fname, lname, rdate, city, country ])
  const newRent = await pool.query("UPDATE ehotel.room SET status = 'booked',  start_date = $1 , end_date = $2 WHERE room_num = $3  ", [ start, end, room ])
  res.send("The Customer has been registered!")
  console.log(req.body)
 } catch (error) {
  console.error(error.message)
 }
})


// Employee enters payment information for the customer
app.post("/payment-confirm", async (req, res) => {
 try {
  const { room } = req.body;
  const newRent = await pool.query("UPDATE ehotel.room SET pending_balance = 'false' WHERE room_num = $1  ", [ room ])
  res.send("The Payment for the customer has been received")
  console.log(req.body)
 } catch (error) {
  console.error(error.message)

 }

})


// Fetch all data on rooms from the postgresql database
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

