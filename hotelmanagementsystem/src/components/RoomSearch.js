
import React, { Fragment, useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function RoomSearch() {
 const [ rooms, setRooms ] = useState([]);
 const [ startDate, setStartDate ] = useState(new Date());
 const [ endDate, setEndDate ] = useState(new Date());

 const getRooms = async () => {
  try {
   const response = await fetch("http://localhost:3000/rooms");
   const jsonData = await response.json();

   setRooms(jsonData);
  } catch (err) {
   console.error(err.message);
  }
 };

 return (
  <Fragment>
   <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
    <br />
    <br />

    <label htmlFor=""> Select start Date</label>
    <br />
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    <br />
    <label htmlFor=""> Select End Date</label>
    <br />
    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
    <br />
    <br />
    <button className="btn btn-primary" onClick={getRooms} style={{ textAlign: "center" }}>Show Rooms</button>
    <br />


   </div>



   {" "}
   <h1 style={{ textAlign: "center" }}>Available Rooms</h1>
   <table class="table mt-5 text-center">
    <thead>
     <tr>
      <th>Room Number</th>
      <th>Capacity</th>
      <th>Price</th>
      <th></th>
     </tr>
    </thead>
    <tbody>

     {rooms.map(room => (
      <tr key={room.hotel_id}>
       <td>{room.room_num}</td>
       <td>{room.capacity}</td>
       <td>{room.price}</td>

       <td>
        <button
         className="btn btn-success">
         Book Room
                </button>
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </Fragment>
 );
}

export default RoomSearch;
