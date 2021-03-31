
import React, { Fragment, useState } from "react";


function RoomSearch() {
       const [ rooms, setRooms ] = useState([]);
       // const [ startDate, setStartDate ] = useState(new Date());
       // const [ endDate, setEndDate ] = useState(new Date());

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
                     <div style={{ textAlign: "center" }}>
                            <br />
                            <br />

                            <label htmlFor=""> Select Check-in Date</label>
                            <br />
                            <input type="date" id="start" name="start" defaultValue="2018-07-22" min="2018-01-01" max="2038-12-31" onClick />
                            <br />
                            <br />
                            <label htmlFor=""> Select Check-out Date</label>
                            <br />
                            <br />
                            <input type="date" id="start" name="start" defaultValue="2018-07-22" min="2018-01-01" max="2038-12-31" onClick />
                            <br />
                            <br />
                            <button className="btn btn-primary" onClick={getRooms} style={{ textAlign: "center" }}>Show Rooms</button>
                            <br />
                            <br />
                            <br />


                     </div>



                     {" "}
                     <h1 style={{ textAlign: "center" }}>Available Rooms</h1>
                     <table class="table mt-5 text-center">
                            <thead>
                                   <tr>
                                          <th>Room Number</th>
                                          <th>Capacity</th>
                                          <th>Price/night</th>
                                          <th></th>
                                   </tr>
                            </thead>
                            <tbody>

                                   {rooms.map(room => (
                                          <tr key={room.hotel_id}>
                                                 <td>{room.room_num}</td>
                                                 <td>{room.capacity}</td>
                                                 <td>${room.price}</td>

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
