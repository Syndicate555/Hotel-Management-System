import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const CustomerBooking = ({ showModal, setShowModal }) => {
 const [ room, setRoom ] = useState(0)
 const [ start, setStart ] = useState(0)
 const [ end, setEnd ] = useState(0)


 return (
  <>
   <div className="container">
    <hr />
    <h1>Renting Confirmation</h1>
    <hr />
    <form>
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
  </>
 )
}

export default CustomerBooking
