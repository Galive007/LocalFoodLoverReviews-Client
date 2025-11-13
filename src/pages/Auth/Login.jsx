import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { signInUser, signInWithGoogle } = use(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location);


    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ email, password });
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset()
                toast.success('Login Successfully')
                navigate(location.state || "/");
            })
            .catch((error) => {
                console.log(error.message);
                toast.error('Something wrong')
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state || "/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="card my-12 md:my-24 bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
            <div className="card-body">
                <h1 className="text-3xl text-center font-bold text-primary">Login</h1>
                <form onSubmit={handleLogIn}>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input text-primary rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Email"
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input text-primary rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Password"
                        />
                        <div>
                            <a className="link link-hover text-primary">Forgot password?</a>
                        </div>
                        <button className="btn mt-4 rounded-full gradient-animate-btn">
                            Login
                        </button>
                    </fieldset>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="btn gradient-animate-btn rounded-full text-black "
                >
                    <FaGoogle className='text-primary' />
                    Login with Google
                </button>
                <p className="text-center text-primary">
                    New to our website? Please  <Link
                        className="text-blue-500 hover:text-blue-800"
                        to="/register"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;