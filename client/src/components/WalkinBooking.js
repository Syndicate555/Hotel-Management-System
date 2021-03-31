import React, { useState } from 'react'

const WalkinBooking = () => {
 const [ sin, setSin ] = useState(0)
 const [ fname, setFname ] = useState("")
 const [ lname, setLname ] = useState("")
 const [ room, setRoom ] = useState(0)
 const [ start, setStart ] = useState(0)
 const [ end, setEnd ] = useState(0)
 return (
  <div className="container" style={{ paddingTop: 50 }}>
   <div className="card shadow-lg o-hidden border-0 my-5">
    <div className="card-body p-0"  >
     <div className="row">
      <div className="col-lg-5 d-none d-lg-flex" >
       <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/4.jpg`} alt='register_image' style={{ objectFit: "cover", height: 600 }} />
      </div>
      <div className="col-lg-7" style={{ paddingTop: "30px" }}>
       <div className="p-5" >
        <div className="text-center">
         <h4 className="text-dark mb-4">Customer Registration - Walk In</h4>

        </div>
        <form className="user" >
         <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="first_name" /></div>
          <div className="col-sm-6"><input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Last Name" name="last_name" /></div>
         </div>
         <div className="form-group" ><input className="form-control form-control-user" type="email" placeholder="Your Business Email" required /></div>
         <div className="form-group" ><input className="form-control form-control-user" type="number" placeholder="Your Sin Number" required /></div>
         <div className="form-group" ><input className="form-control form-control-user" type="number" placeholder="Room Number" required /></div>
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
