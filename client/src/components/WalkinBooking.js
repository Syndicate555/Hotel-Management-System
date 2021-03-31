import React, { useState } from 'react'

const WalkinBooking = () => {
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
   const response = await fetch("http://localhost:3000/customer-register", {
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
  <div className="container" style={{ paddingTop: 50 }}>
   <div className="card shadow-lg o-hidden border-0 my-5">
    <div className="card-body p-0"  >
     <div className="row">
      <div className="col-lg-5 d-none d-lg-flex" >
       <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/4.jpg`} alt='register_image' style={{ objectFit: "cover", height: 600 }} />
      </div>
      <div className="col-lg-7" >
       <div className="p-5" >
        <div className="text-center">
         <h4 className="text-dark mb-4">Customer Registration - Walk In</h4>

        </div>
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


         <div className="col-sm-6 mb-3 mb-sm-0"><button className="btn btn-primary  text-white btn-user" type="submit" style={{ padding: "None" }} >Confirm Registration</button></div>



        </form>

       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default WalkinBooking
