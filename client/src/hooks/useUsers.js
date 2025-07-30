import { useState } from 'react';

const useUsers = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createUser = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3001/users/create-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const data = await response.json();
            return data;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const getAllUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3001/users/get-all-users', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            return data;
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    const loginUser = async (credentials) => {

        try {
            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            };

            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
        }
    }

    return {
        createUser,
        getAllUsers,
        loginUser,
        loading,
        error,
    };
}

export default useUsers;