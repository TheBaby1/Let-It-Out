import React from 'react';
import CloseButton from '../buttons/CloseButton';

const RegistrationSuccessModal = ({ onClose }) => {
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-[9999]">
            <div className="bg-white rounded-[8px] flex items-center justify-center shadow-lg py-8  px-4 w-full max-w-md mx-4">
                <div className="text-center">
                    <h1 className="text-black text-xl font-semibold mb-4">
                        Successfully Registered!
                    </h1>
                    <CloseButton onClick={onClose} />
                </div>
            </div>
        </div>
    );
}

export default RegistrationSuccessModal;