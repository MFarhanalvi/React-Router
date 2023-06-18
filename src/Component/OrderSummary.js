import { useNavigate } from 'react-router'
import React from 'react'

function OrderSummary() {
  const navigate = useNavigate();  
  return (
    <>
    <div>order submitted</div>
    <button onClick={()=> {navigate(-1)}}>Go back</button>
    </>
  )
}

export default OrderSummary