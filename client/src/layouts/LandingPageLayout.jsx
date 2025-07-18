import React from 'react';
import LoginBox from '../components/login/LoginBox';

const LandingPageLayout = ({ children }) => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <LoginBox />        
                </div>
            </div>
        </>
    );
}

export default LandingPageLayout;