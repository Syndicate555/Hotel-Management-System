import React from 'react'

const Home = () => {
 return (
  <div>
   <div className="container" style={{ paddingTop: 50 }}>
    <div className="card shadow-lg o-hidden border-0 my-5">
     <div className="card-body p-0" style={{ height: 600 }} >
      <div className="row">
       <div className="col-lg-7 d-none d-lg-flex" >
        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/img/3.jpg`} alt='register_image' style={{ objectFit: "cover", height: 600 }} />
       </div>
       <div className="col-lg-5" >
        <div className="p-5" >
         <div className="text-center">
          <h4 className="text-dark mb-4">Welcome to the eHotel Directory</h4>
          <h4 className="text-dark mb-4">Please select an option</h4>

         </div>
         <form className="user" style={{ paddingTop: "20px" }} >
          <div className="form-group"><a href="/customer-search" className="btn btn-primary  text-white btn-user" type="submit" style={{ background: '#3bb1e3', border: "none", outline: "none", boxShadow: "none", width: "100%" }}>Customer Online Booking</a></div>
          <div className="form-group"><a href="/employee-lookup" className="btn btn-primary  text-white btn-user" type="submit" style={{ background: '#3bb1e3', border: "none", outline: "none", boxShadow: "none", width: "100%" }}>Employee Room Lookup</a></div>
          <div className="form-group"><a href="/confirm-customer" className="btn btn-primary  text-white btn-user" type="submit" style={{ background: '#3bb1e3', border: "none", outline: "none", boxShadow: "none", width: "100%" }}>Confirm Customer Booking</a></div>
          <div className="form-group"><a href="/customer-registration" className="btn btn-primary  text-white btn-user" type="submit" style={{ background: '#3bb1e3', border: "none", outline: "none", boxShadow: "none", width: "100%" }}>Customer Registration - Walk In</a></div>
          <div className="form-group"><a href="/customer-payment" className="btn btn-primary  text-white btn-user" type="submit" style={{ background: '#3bb1e3', border: "none", outline: "none", boxShadow: "none", width: "100%" }}>Enter Customer Payment</a></div>
         </form>

        </div>
       </div>
      </div>
     </div>
    </div>
   </div>


  </div>
 )
}

export default Home
