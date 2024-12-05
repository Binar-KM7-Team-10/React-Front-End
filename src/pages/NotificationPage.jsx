import React from 'react';
import Navbar from '../components/fragments/Navbar/Navbar';
import OrderHeaderHistory from '../components/fragments/OrderSection/OrderHeaderHistory';
import Notification from '../components/fragments/Notification/Notification';

const NotificationPage = () => {

    return (
        <div>
            <Navbar search={false} type={"auth"} />
            <OrderHeaderHistory />
            <Notification/>
        </div>
    );
};

export default NotificationPage;
