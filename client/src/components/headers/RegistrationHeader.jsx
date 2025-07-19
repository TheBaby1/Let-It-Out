import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterButton from '../buttons/RegisterButton';

const RegistrationHeader = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/landing-page');
    }

    return (
        <>
            <div className="min-w-full h-[80px] bg-[#CBF1F5] shadow-md">
                <div className="flex items-center justify-between px-6 h-full">
                    <div className="w-[60px] h-[60px] bg-gray-200 rounded-[8px]">

                    </div>

                    <div className="flex items-center gap-x-4">
                        <RegisterButton 
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegistrationHeader;