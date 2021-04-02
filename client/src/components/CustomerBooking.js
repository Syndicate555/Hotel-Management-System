import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md'


const CustomerBooking = ({ showModal, setShowModal }) => {
 const [ sin, setSin ] = useState(0)
 const [ fname, setFname ] = useState("")
 const [ lname, setLname ] = useState("")
 const [ room, setRoom ] = useState(0)
 const [ start, setStart ] = useState(0)
 const [ end, setEnd ] = useState(0)
 const [ city, setCity ] = useState("")
 const [ country, setCountry ] = useState("")
 const onSubmitForm = async e => {
  e.preventDefault();
  try {
   const body = {
    "sin": sin,
    "fname": fname,
    "lname": lname,
    "city": city,
    "country": country,
    "room": room,
    "start": start,
    "end": end
   };
   const response = await fetch("http://localhost:3000/customer-booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
   });
   console.log(body)

   window.location = "/customer-registration";
  } catch (err) {
   console.error(err.message);

  }
 };

 return (
  <>
   <div className="container">
    <br />
    <br />
    <h1>Customer Online Booking</h1>
    <hr />
    <form className="user" onSubmit={onSubmitForm} >
     <div className="form-group row">
      <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" placeholder="First Name" onChange={e => setFname(e.target.value)} /></div>
      <div className="col-sm-6"><input className="form-control form-control-user" type="text" placeholder="Last Name" onChange={e => setLname(e.target.value)} /></div>
     </div>
     <div className="form-group" ><input className="form-control form-control-user" type="email" placeholder="Your Business Email" required /></div>
     <div className="form-group" ><input className="form-control form-control-user" type="number" placeholder="Your Sin Number" onChange={e => setSin(e.target.value)} required /></div>
     <div className="form-group" ><input className="form-control form-control-user" type="number" placeholder="Room Number" onChange={e => setRoom(e.target.value)} required /></div>
     <div className="form-group row">
      <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" placeholder="City" onChange={e => setCity(e.target.value)} /></div>
      <div className="col-sm-6"><input className="form-control form-control-user" type="text" placeholder="Country" onChange={e => setCountry(e.target.value)} /></div>
     </div>

     <div className="form-group row">
      <label className="col-sm-6 mb-3 mb-sm-0" htmlFor="">Check In Date</label>
      <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" defaultValue="2018-07-22" type="date" onChange={e => setStart(e.target.value)} /></div>
      <br />
      <br />
      <label className="col-sm-6 mb-3 mb-sm-0" htmlFor="">Check In Date</label>
      <div className="col-sm-6"><input className="form-control form-control-user" type="date" defaultValue="2018-07-22" onChange={e => setEnd(e.target.value)} /></div>
     </div>


     <div className="col-sm-6 mb-3 mb-sm-0"><button className="btn btn-primary  text-white btn-user" type="submit" style={{ padding: "None" }} >Confirm Booking</button></div>



    </form>
   </div>
  </>
 )
}

export default CustomerBooking
