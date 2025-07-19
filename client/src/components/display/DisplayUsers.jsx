import React from 'react';
import { useState, useEffect } from 'react';
import useUsers from '../../hooks/useUsers';

const DisplayUsers = () => {

    const { getAllUsers, loading, error } = useUsers();
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const userList = await getAllUsers();
        if (userList) {
            setUsers(userList);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-y-4 w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
                <h2 className="text-center text-[30px] text-black font-bold mb-4">
                    User List
                </h2>
                <ul>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error fetching users: {error}</p>
                    ) : (
                        users.map(user => (
                            <li key={user._id} className="text-[20px] text-black font-semibold">
                                {user.name} ({user.username})
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
}

export default DisplayUsers;