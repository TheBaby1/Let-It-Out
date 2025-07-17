import React from 'react';
import RegistrationBox from '../components/register/RegistrationBox';

const RegistrationLayout = ({ children }) => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <RegistrationBox />
                </div>
            </div>
        </>
    );
}

export default RegistrationLayout;