import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext)
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault()

        const displayName = e.target.displayName.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        // ✅ Password validation rules
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            toast.error('Passwords do not match!');
            return;
        }

        if (!passwordRegex.test(password)) {
            setError('Password must contain uppercase, lowercase & at least 6 characters.');
            toast.error('Password must contain uppercase, lowercase & at least 6 characters.');
            return;
        }

        // toast.loading("Creating user...", { id: "create-user" });

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(displayName, photoURL)
                toast.success("User Registration successfully!", { id: "create-user" });
                navigate("/");
            })
            .catch((error) => {
                console.log(error.code);
                toast.error(error.message, { id: "create-user" });
            })

    }
    const handleGoogleSignIn = () => {
        // toast.loading("Creating user...", { id: "create-user" });
        signInWithGoogle()
            .then((result) => {
                toast.success("User created successfully!", { id: "create-user" });
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message, { id: "create-user" });
            });
    }

    return (
        <div className="card md:my-10 bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold text-primary text-center">Register</h1>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="displayName"
                            className="input rounded-full focus:border-0 text-primary focus:outline-gray-200"
                            placeholder="Name"
                        />

                        <label className="label">PhotoURL</label>
                        <input
                            type="text"
                            name="photoURL"
                            className="input text-primary rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Photo URL"
                        />
                        {/* email field */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input text-primary rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Email"
                        />
                        {/* password field */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input text-primary rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Password"
                        />
                        {/* confirm password field */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="input text-primary rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Confirm Password"
                        />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <button className="btn text-white mt-4 rounded-full gradient-animate-btn">
                            Register
                        </button>
                    </fieldset>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="btn bg-white rounded-full gradient-animate-btn border-[#e5e5e5]"
                >
                    <FaGoogle className='text-primary' />
                    Login with Google
                </button>
                <p className="text-center text-primary">
                    Already have an account? Please{" "}
                    <Link className="text-blue-500 hover:text-blue-800" to="/login">
                        Login
                    </Link>{" "}
                </p>
            </div>
        </div>
    );
};

export default Register;