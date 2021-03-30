import React, { Fragment, useState } from "react";

const ConfirmCustomer = () => {
 return (
  <div className="container">
   <hr />
   <h1>Renting Confirmation</h1>
   <hr />
   <form onSubmit>
    <div className="form-group">
     <label htmlFor="ISBN">Customer Name</label>
     <input className="form-control" name="isbn" />
    </div>
    <div className="form-group">
     <label htmlFor="Title">Room Number</label>
     <input className="form-control" name="room" />
    </div>
    <div className="form-group">
     <label htmlFor="start">Start date:</label>
     <br />
     <input type="date" id="start" name="start" defaultValue="2018-07-22" min="2018-01-01" max="2038-12-31" />
     <br />
     <br />
     <label htmlFor="start">End date:</label>
     <br />
     <input type="date" id="start" name="end" defaultValue="2018-07-22" min="2018-01-01" max="2038-12-31" />
    </div>
    <button type="submit" className="btn btn-primary">Confirm Renting</button>
   </form>
  </div>
 )
}

export default ConfirmCustomer
