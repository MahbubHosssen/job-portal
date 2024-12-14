import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const SocialGoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log('success Google Login', result.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className=''>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn w-full text-white bg-blue-600">Google</button>
        </div>
    );
};

export default SocialGoogleLogin;