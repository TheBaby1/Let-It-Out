import React from 'react';

const CloseButton = ( {onClick} ) => {

    return (
        <>
            <button 
                className="h-[40px] w-[80px] rounded-[8px] bg-black text-white font-semibold cursor-pointer"
                onClick={onClick}    
            >
                Close
            </button>
        </>
    );
}

export default CloseButton;