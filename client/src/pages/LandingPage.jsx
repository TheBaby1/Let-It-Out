import React from 'react';
import LandingPageLayout from '../layouts/LandingPageLayout';
import RegistrationLayout from '../layouts/RegistrationLayout';
import MainHeader from '../components/headers/MainHeader';

const LandingPage = () => {
    return (
        <>
            <MainHeader />
            <LandingPageLayout />
        </>
    );
}

export default LandingPage;