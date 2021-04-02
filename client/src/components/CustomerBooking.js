import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md'

const CustomerBooking = ({ showModal, setShowModal }) => {
 return (
  <>
   {showModal ? <div>Test</div> : null}
  </>
 )
}

export default CustomerBooking
