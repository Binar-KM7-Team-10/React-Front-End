import React from 'react'
import OrderForm from '../components/fragments/OrderSection/OrderForm'
import NavbarAuthentication from '../components/fragments/Navbar/Navbar'
import OrderHeader from '../components/fragments/OrderSection/OrderHeader'

const Payment = () => {
  return (
    <div>
        <NavbarAuthentication/>
        <OrderHeader/>
        <OrderForm/>
    </div>

  )
}

export default Payment
