import React, { useState } from "react";

const CustomerPayment = () => {
 // const [ payment, setPayment ] = useState(false)
 const [ room, setRoom ] = useState(0)

 const onSubmitForm = async e => {
  e.preventDefault();
  try {
   const body = {
    "room": room,
   };
   const response = await fetch("http://localhost:3000/payment-confirm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
   });
   console.log(body)

   window.location = "/";
  } catch (err) {
   console.error(err.message);

  }
 };

 return (
  <div className="container">
   <hr />
   <h1>Customer Payment Confirmation</h1>
   <hr />
   <form onSubmit={onSubmitForm}>
    <div className="form-group">
     <label htmlFor="ISBN">Customer Name</label>
     <input className="form-control" name="name" />
    </div>
    <div className="form-group">
     <label htmlFor="Title">Room Number</label>
     <input className="form-control" name="room" onChange={e => setRoom(e.target.value)} />
    </div>
    <div className="form-group">
     <label htmlFor="start">Amout CAD</label>
     <input className="form-control" type="number" />

    </div>
    <button type="submit" className="btn btn-primary">Confirm payment for room</button>
   </form>
  </div>
 )
}

export default CustomerPayment
