import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import { useState, useEffect } from 'react';

const LoginBox = () => {

    const { loginUser } = useUsers(); 
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: [e.target.value],
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const result = await loginUser(formData);
            navigate('/home-page');
        } catch (error) {
            console.log('Failed to login user');
        }
    }

    return (
        <div className="flex flex-col gap-y-4 w-full rounded-3xl px-6 py-4 bg-[#CBF1F5] shadow-md">
            <h2 className="text-black text-3xl font-bold text-center">
                Login
            </h2>

            <form onSubmit={handleLogin}>
                <div className="grid grid-col gap-4 mb-4">
                    <label className="text-black text-2xl font-semibold">
                        Username
                    </label>
                    <input className="h-[35px] border border-gray-300 rounded-lg px-4"
                        placeholder="Username"
                        type="text"
                        name="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                    >
                    </input>
                </div>

                <div className="grid grid-col gap-4 mb-6">
                    <label className="text-black text-2xl font-semibold">
                        Password
                    </label>
                    <input className="h-[35px] border border-gray-300 rounded-lg px-4"
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    >
                    </input>
                </div>

                <div className="text-center justify-between gap-[2px] mb-4">
                    <button
                        type="submit"
                        className="w-[120px] bg-blue-500 text-white py-2 rounded-[8px] hover:bg-blue-600 transition duration-300 cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </form>


        </div>
    );
}

export default LoginBox;