import RegistrationLayout from "../layouts/RegistrationLayout";
import RegistrationHeader from "../components/headers/RegistrationHeader";
import RegistrationSuccessModal from "../components/modals/RegistrationSuccessModal";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/landing-page');
    }

    return (
        <>
            <RegistrationHeader />
            <RegistrationLayout 
                setIsModalOpen={setIsModalOpen}
            />

            {isModalOpen && (
                <RegistrationSuccessModal 
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}

export default RegistrationPage;