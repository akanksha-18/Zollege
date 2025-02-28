// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; 
// import Navbar from "../../components/Navbar";
// import PasswordInput from "../../components/Input/PasswordInput";
// import axiosInstance from "../../utils/axiosInstance";
// import { validateEmail } from "../../utils/helper";

// const SignUp = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSignUp = async (e) => {
//         e.preventDefault();

//         if (!name.trim()) return toast.error("Please enter your name");
//         if (!validateEmail(email)) return toast.error("Please enter a valid email address");
//         if (!password) return toast.error("Please enter a password");
//         if (password !== confirmPassword) return toast.error("Passwords do not match");

//         try {
//             const response = await axiosInstance.post("api/users/create-account", {
//                 fullName: name,
//                 email: email,
//                 password: password,
//             });

//             if (response.data && response.data.accessToken) {
//                 toast.success("Registration successful! Redirecting to login...");
//                 localStorage.setItem("token", response.data.accessToken);
//                 setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || "An unexpected error occurred");
//         }
//     };

//     return (
//         <>
//             {/* <Navbar /> */}
//             <div className="flex items-center justify-center mt-28">
//                 <div className="w-96 border rounded bg-white px-7 py-10">
//                     <form onSubmit={handleSignUp}>
//                         <h4 className="text-2xl mb-7">Sign Up</h4>

//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="input-box"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Email"
//                             className="input-box"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <PasswordInput
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                         />
//                         <PasswordInput
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             placeholder="Confirm Password"
//                         />
//                         <button className="w-full text-sm bg-blue-500 text-white p-2 rounded my-1 hover:bg-blue-700">
//                             Sign Up
//                         </button>
//                         <p className="text-center text-gray-600 mt-4">
//                             Already have an account?{" "}
//                             <Link
//                                 to="/login"
//                                 className="text-blue-600 font-medium hover:underline"
//                             >
//                                 Login
//                             </Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SignUp;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import PasswordInput from "../../components/Input/PasswordInput";
// import axiosInstance from "../../utils/axiosInstance";
// import { validateEmail } from "../../utils/helper";
// import notes from "../../assets/notes.jpg";

// const SignUp = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const navigate = useNavigate();
    
//     const handleSignUp = async (e) => {
//         e.preventDefault();
        
//         if (!name.trim()) return toast.error("Please enter your name");
//         if (!validateEmail(email)) return toast.error("Please enter a valid email address");
//         if (!password) return toast.error("Please enter a password");
//         if (password !== confirmPassword) return toast.error("Passwords do not match");
        
//         try {
//             const response = await axiosInstance.post("api/users/create-account", {
//                 fullName: name,
//                 email: email,
//                 password: password,
//             });
            
//             if (response.data && response.data.accessToken) {
//                 toast.success("Registration successful! Redirecting to login...");
//                 localStorage.setItem("token", response.data.accessToken);
//                 setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
//             }
//         } catch (error) {
//             toast.error(error.response?.data?.message || "An unexpected error occurred");
//         }
//     };
    
//     return (
//         <div className="h-screen relative overflow-hidden">
//             {/* Background image with blur */}
//             <div 
//                 className="absolute inset-0" 
//                 style={{
//                     backgroundImage: `url(${notes})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     filter: 'blur(4px)',
//                     transform: 'scale(1.1)' 
//                 }}
//             ></div>
            
           
            
//             {/* Content */}
//             <div className="relative z-10 h-full flex items-center justify-center">
//                 <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg text-white w-full max-w-md">
//                     <h2 className="text-3xl font-bold text-center mb-5">Welcome to Notes App</h2>
//                     <form onSubmit={handleSignUp} className="space-y-4">
//                         <h4 className="text-xl font-semibold text-center">Sign Up</h4>
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Email"
//                             className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <PasswordInput
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                         />
//                         <PasswordInput
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             placeholder="Confirm Password"
//                         />
//                         <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
//                             Sign Up
//                         </button>
//                         <p className="text-center">
//                             Already have an account?{" "}
//                             <Link to="/login" className="text-blue-300 font-medium hover:underline">
//                                 Login
//                             </Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PasswordInput from "../../components/Input/PasswordInput";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail } from "../../utils/helper";
import notes from "../../assets/notes.jpg";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        
        if (!name.trim()) return toast.error("Please enter your name");
        if (!validateEmail(email)) return toast.error("Please enter a valid email address");
        if (!password) return toast.error("Please enter a password");
        if (password !== confirmPassword) return toast.error("Passwords do not match");
        
        try {
            const response = await axiosInstance.post("api/users/create-account", {
                fullName: name,
                email: email,
                password: password,
            });
            
            if (response.data && response.data.accessToken) {
                toast.success("Registration successful! Redirecting to login...");
                localStorage.setItem("token", response.data.accessToken);
                setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An unexpected error occurred");
        }
    };
    
    return (
        <div className="h-screen relative overflow-hidden">
            {/* Background image with blur */}
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
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg text-white w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-5">Welcome to Notes App</h2>
                    <form onSubmit={handleSignUp} className="space-y-4">
                        <h4 className="text-xl font-semibold text-center">Sign Up</h4>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <PasswordInput
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
                            Sign Up
                        </button>
                        <p className="text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-300 font-medium hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
