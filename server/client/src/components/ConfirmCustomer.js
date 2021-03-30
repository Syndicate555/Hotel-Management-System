import React, { useState } from "react";

const ConfirmCustomer = () => {
 const [ room, setRoom ] = useState(0)
 const [ start, setStart ] = useState(0)
 const [ end, setEnd ] = useState(0)

 const onSubmitForm = async e => {
  e.preventDefault();
  try {
   const body = {
    "room": room,
    "start": start,
    "end": end
   };
   const response = await fetch("http://localhost:3000/booking-confirm", {
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
   <h1>Renting Confirmation</h1>
   <hr />
   <form onSubmit={onSubmitForm}>
    <div className="form-group">
     <label htmlFor="ISBN">Customer Name</label>
     <input className="form-control" name="isbn" />
    </div>
    <div className="form-group">
     <label htmlFor="Title">Room Number</label>
     <input className="form-control" name="room" onChange={e => setRoom(e.target.value)} />
    </div>
    <div className="form-group">
     <label htmlFor="start">Start date:</label>
     <br />
     <input type="date" id="start" name="start" defaultValue="2018-07-22" min="2018-01-01" max="2038-12-31" onChange={e => setStart(e.target.value)} />
     <br />
     <br />
     <label htmlFor="start">End date:</label>
     <br />
     <input type="date" id="start" name="end" defaultValue="2018-07-22" min="2018-01-01" max="2038-12-31" onChange={e => setEnd(e.target.value)} />
     <br />
    </div>
    <button type="submit" className="btn btn-primary">Confirm Renting</button>
   </form>
  </div>
 )
}

export default ConfirmCustomer
