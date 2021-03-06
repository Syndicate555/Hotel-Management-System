
import React, { Fragment, useEffect, useState } from "react";

function EmployeeLookup() {
       const [ rooms, setRooms ] = useState([]);

       const getRooms = async () => {
              try {
                     const response = await fetch("http://localhost:3000/all-rooms");
                     const jsonData = await response.json();

                     setRooms(jsonData);
              } catch (err) {
                     console.error(err.message);
              }
       };
       useEffect(() => {
              getRooms();
       }, []);



       return (
              <Fragment>
                     {" "}
                     <br />
                     <h1 style={{ textAlign: "center" }}>Available or Booked Rooms</h1>
                     <table class="table mt-5 text-center">
                            <thead>
                                   <tr>
                                          <th>Room Number</th>
                                          <th>Capacity</th>
                                          <th>Status</th>
                                          <th></th>
                                   </tr>
                            </thead>
                            <tbody>

                                   {rooms.map(room => (
                                          <tr key={room.hotel_id}>
                                                 <td>{room.room_num}</td>
                                                 <td>{room.capacity}</td>
                                                 <td>{room.status}</td>

                                                 <td>


                                                        {room.status === 'available' ? <a href="/customer-registration"
                                                               className="btn btn-success">
                                                               Rent room for customer</a> : null}
                                                 </td>
                                          </tr>
                                   ))}
                            </tbody>
                     </table>
              </Fragment>
       );
}

export default EmployeeLookup;

