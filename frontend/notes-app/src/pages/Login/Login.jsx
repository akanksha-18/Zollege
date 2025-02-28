import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import notes from "../../assets/notes.jpg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }
        if (!password) {
            setError("Please enter the password");
            return;
        }
        setError("");
        
        // Login API Call
        try {
            const response = await axiosInstance.post("api/users/login", {
                email: email,
                password: password,
            });
            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken);
                navigate("/dashboard");
            }
        } catch (error) {
            setError(error.response?.data?.message || "An unexpected error occurred");
        }
    };
    
    return (
        <div className="h-screen relative overflow-hidden">
            
            <div 
                className="absolute inset-0" 
                style={{
                    backgroundImage: `url(${notes})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(4px)',
                    transform: 'scale(1.1)'
                }}
            ></div>
           
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg text-white w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-5">Welcome to Notes App</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <h4 className="text-xl font-semibold text-center">Login</h4>
                        <input 
                            type="text"
                            placeholder="Email"
                            className="w-full p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                        <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
                            Login
                        </button>
                        <p className="text-center">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-blue-300 font-medium hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
