import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MainHeader = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/registration-page');
    }


    return (
        <>
            <div className="min-w-full h-[80px] bg-white shadow-md">
                <div className="flex items-center justify-between px-6 h-full">
                    <div className="w-[60px] h-[60px] bg-gray-200 rounded-[8px]">

                    </div>

                    <div className="flex items-center gap-x-4">
                        <button 
                            className="h-[40px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg px-4 py-2 hover:opacity-90 transition duration-300 cursor-pointer"
                            onClick={handleClick}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainHeader;