import React, { useState } from 'react';
import useUsers from '../../hooks/useUsers';

const RegistrationBox = () => {

    const { createUser, loading, error } = useUsers();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        age: 0,
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(formData);
    }

    return (
        <>
            <div className="flex flex-col gap-y-4 w-full rounded-3xl px-6 py-4 bg-[#CBF1F5] shadow-md">
                <h2 className="text-center text-[30px] text-black font-bold mb-4">
                    Register Now!
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 text-center justify-between gap-[2px] mb-4">
                        <label className="text-[20px] text-black font-semibold mt-[1px]">
                            Full Name:
                        </label>
                        <input
                            className="border border-gray-300 rounded-[8px] h-[35px] px-2"
                            placeholder="Full Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>

                    <div className="grid grid-cols-2 text-center justify-between gap-[2px] mb-4">
                        <label className="text-[20px] text-black font-semibold mt-[1px]">
                            Username:
                        </label>
                        <input
                            className="border border-gray-300 rounded-[8px] h-[35px] px-2"
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>

                    <div className="grid grid-cols-2 text-center justify-between gap-[2px] mb-4">
                        <label className="text-[20px] text-black font-semibold mt-[1px]">
                            Age:
                        </label>
                        <input
                            className="border border-gray-300 rounded-[8px] h-[35px] px-2"
                            placeholder="Age"
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>

                    <div className="grid grid-cols-2 text-center justify-between gap-[2px] mb-4">
                        <label className="text-[20px] text-black font-semibold mt-[1px]">
                            Email:
                        </label>
                        <input
                            className="border border-gray-300 rounded-[8px] h-[35px] px-2"
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>

                    <div className="grid grid-cols-2 text-center justify-between gap-[2px] mb-6">
                        <label className="text-[20px] text-black font-semibold mt-[1px]">
                            Password:
                        </label>
                        <input
                            className="border border-gray-300 rounded-[8px] h-[35px] px-2"
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        >
                        </input>
                    </div>

                    <div className="text-center justify-between gap-[2px] mb-4">
                        <button
                            type="submit"
                            className="w-[120px] bg-blue-500 text-white py-2 rounded-[8px] hover:bg-blue-600 transition duration-300 cursor-pointer"
                        >
                            Register
                        </button>
                    </div>

                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                </form>
            </div>
        </>
    );
}

export default RegistrationBox;