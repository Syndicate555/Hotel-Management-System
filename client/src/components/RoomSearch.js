
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import { GlobalStyle } from './globalStyles';
import CustomerBooking from './CustomerBooking'
const Button = styled.button`
  min-width: 70px;
  padding: 10px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

function RoomSearch() {
       const [ rooms, setRooms ] = useState([]);
       const [ showModal, setShowModal ] = useState(false);
       // const [ startDate, setStartDate ] = useState(new Date());
       // const [ endDate, setEndDate ] = useState(new Date());

       const openModal = () => {
              setShowModal(prev => !prev);
       };

       const getRooms = async () => {
              try {
                     const response = await fetch("http://localhost:3000/rooms");
                     const allRooms = await response.json();

                     setRooms(allRooms);

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
                     <table className="table mt-5 text-center">
                            <thead>
                                   <tr>
                                          <th>Room Number</th>
                                          <th>Capacity</th>
                                          <th>Mountain/Ocean view available</th>
                                          <th>Price/night</th>
                                          <th></th>
                                   </tr>
                            </thead>
                            <tbody>

                                   {rooms.map(room => (
                                          <tr key={room.hotel_id}>
                                                 <td>{room.room_num}</td>
                                                 <td>{room.capacity}</td>
                                                 <td>{room.view}</td>
                                                 <td>${room.price}</td>

                                                 <td >
                                                        <a className="btn btn-success" onClick={getRooms} style={{ textAlign: "center", color: "white" }}>Book Room</a>

                                                 </td>
                                          </tr>
                                   ))}
                            </tbody>
                     </table>

              </Fragment>
       );
}

export default RoomSearch;
