import React from 'react';
import RegistrationBox from '../components/register/RegistrationBox';

const RegistrationLayout = ({ children }) => {
    return (
        <>
            <div className="relative min-h-[90vh] flex flex-col sm:justify-center items-center bg-[#E3FDFD]">
                <div className="relative sm:max-w-sm w-full">
                    <RegistrationBox />
                </div>
            </div>
        </>
    );
}

export default RegistrationLayout;