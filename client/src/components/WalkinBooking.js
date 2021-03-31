import React, { useState } from 'react'

const WalkinBooking = () => {
 const [ sin, setSin ] = useState(0)
 const [ fname, setFname ] = useState("")
 const [ lname, setLname ] = useState("")
 return (
  <div className="container" style={{ paddingTop: 50 }}>
   <div className="card shadow-lg o-hidden border-0 my-5">
    <div className="card-body p-0"  >
     <div className="row">
      <div className="col-lg-5 d-none d-lg-flex" >
       <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/3.jpg`} alt='register_image' style={{ objectFit: "cover", height: 600 }} />
      </div>
      <div className="col-lg-7" style={{ paddingTop: "30px" }}>
       <div className="p-5" >
        <div className="text-center">
         <h4 className="text-dark mb-4">Customer Registration - Walk In</h4>

        </div>
        <form className="user" >
         <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type={first_name.type} value={first_name.value} onChange={first_name.onChange} id="exampleFirstName" placeholder="First Name" name="first_name" /></div>
          <div className="col-sm-6"><input className="form-control form-control-user" type={last_name.type} value={last_name.value} onChange={last_name.onChange} id="exampleFirstName" placeholder="Last Name" name="last_name" /></div>
         </div>
         <div className="form-group" ><input className="form-control form-control-user" type={email.type} value={email.value} onChange={email.onChange} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your Business Email" name="email" /></div>
         <div className="form-group" ><input className="form-control form-control-user" type={brand_name.type} value={brand_name.value} onChange={brand_name.onChange} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your Brand Name" name="brand_name" /></div>
         <div className="form-group" ><input className="form-control form-control-user" type={password.type} value={password.value} onChange={password.onChange} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Your Password" name="password" /></div>
         <div className="text-center"><a className="small" href="forgot-password.html">Forgot Password?</a></div>

         <div className="col-sm-6 mb-3 mb-sm-0"><button className="btn btn-primary  text-white btn-user" type="submit" style={{ background: '#8A88F5', border: "none", outline: "none", boxShadow: "none" }}>Save and continue</button></div>



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
