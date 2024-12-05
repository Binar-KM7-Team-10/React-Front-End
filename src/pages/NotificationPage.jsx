import React from 'react';
import NavbarAuthentication from '../components/fragments/NavbarAuthentication';
import OrderHeaderHistory from '../components/fragments/OrderSection/OrderHeaderHistory';
import Notification from '../components/fragments/Notification/Notification';

const NotificationPage = () => {

    return (
        <div>
            <NavbarAuthentication search={false} />
            <OrderHeaderHistory />
            <Notification/>
        </div>
    );
};

export default NotificationPage;
