import React from 'react'
import OrderForm from '../components/fragments/OrderForm'
import NavbarAuthentication from '../components/fragments/NavbarAuthentication'
import OrderHeader from '../components/fragments/OrderHeader'

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
