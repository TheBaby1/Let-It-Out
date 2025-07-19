import React from 'react';

const RegisterButton = ( {onClick} ) => {

    return (
        <>
            <button
                className="h-[40px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg px-4 py-2 hover:opacity-90 transition duration-300 cursor-pointer"
                onClick={onClick}
            >
                Back to Landing
            </button>
        </>
    );
}

export default RegisterButton;