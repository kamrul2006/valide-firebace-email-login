import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import auth from "../firtebase.init";

const LoginSection = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    const EmailRef = useRef();

    // show password---------------------------------
    const ShowpassWord = (e) => {
        e.preventDefault();
        setShow(!show)
    }

    // Login------------------------------------------
    const HandleLogin = e => {
        e.preventDefault();

        const Email = e.target.email.value;
        const PassWord = e.target.password.value;

        // console.log(Email)
        // console.log(PassWord)

        setError(null)
        signInWithEmailAndPassword(auth, Email, PassWord)

            .then((user) => {
                // Signed in 
                const User = user.user;
                if (!User.emailVerified) {
                    setError('Your Email is not Verified yet. Check your inbox.')
                }
                console.log(User)
            })
            .catch((error) => {
                if (error) {
                    setError('Password or Email is incorrect.')
                }
            });
    }

    // forgot---------------------------------------
    const HandleForgot = () => {
        const Email = EmailRef.current.value
        // console.log(Email)

        if (!Email) {
            setError('Pleas provide a valid email address.')
            return
        }
        sendPasswordResetEmail(auth, Email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                if(error){
                    setError('Not a valid email Address!')
                }
            });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg')" }}>
            <div className="bg-opacity-90 p-10 max-w-md w-full">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back!</h2>
                <p className="text-center text-white mb-8">Login to access your account</p>

                <form onSubmit={HandleLogin} className="space-y-6">
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={EmailRef}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute px-3 left-3 -top-3 text-gray-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-indigo-500 rounded-xl peer-focus:border peer-focus:border-indigo-500 text-xs"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute px-3 left-3 -top-3 text-gray-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-indigo-500 rounded-xl peer-focus:border peer-focus:border-indigo-500 text-xs"
                        >
                            Password
                        </label>
                        <button onClick={ShowpassWord} className="btn btn-ghost btn-xs absolute right-3 top-2 text-lg">
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}

                    <p onClick={HandleForgot} className="text-white text-xs"><span className="text-yellow-500 hover:underline ">Forgot Password</span> ?</p>

                    <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300">
                        Log In
                    </button>
                </form>

                <p className="text-center text-white mt-6">
                    Do not have an account? <Link to={'/signUp'} className="text-indigo-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginSection;
