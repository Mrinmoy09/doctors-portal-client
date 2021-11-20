import React from 'react';
import Navigation from '../../Shared/NavBar/Navigation';
import AppointHeader from '../AppointHeader/AppointHeader';
import AvailableApponitment from '../AvailableAppointment/AvailableApponitment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader 
            date={date}
            setDate={setDate}
            ></AppointHeader>
            <AvailableApponitment date={date}></AvailableApponitment>
        </div>
    );
};

export default Appointment;