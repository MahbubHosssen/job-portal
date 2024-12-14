import React, { useContext } from 'react';
import registerLottie from '../../assets/lottie/registerAnimation.json'
import Lottie from 'lottie-react';
import AuthContext from '../../context/AuthContext';
import SocialGoogleLogin from '../sharedComponent/SocialGoogleLogin';
const Register = () => {
    const {user,setUser, createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        console.log({name, email, password})
        createUser(email, password)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center flex-1 lg:text-left w-96">
                    <Lottie animationData={registerLottie} ></Lottie>
                </div>
                <div className=" card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input rounded-md border-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input rounded-md border-blue-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input rounded-md border-blue-200" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-900 text-white hover:bg-blue-600">Login</button>
                        </div>
                    </form>
                    <SocialGoogleLogin></SocialGoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;