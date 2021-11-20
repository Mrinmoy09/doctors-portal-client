import React from 'react';
import Navigation from '../../Shared/NavBar/Navigation';
import AppointmentBanner from '../AppoitMentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Exceptional from '../Exceptional/Exceptional';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Exceptional></Exceptional>
           <AppointmentBanner></AppointmentBanner>
           <ContactForm></ContactForm>
        </div>
    );
};

export default Home;