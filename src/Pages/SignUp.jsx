import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../firtebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUpSection = () => {

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [show, setShow] = useState(false)

    const HandleSignUp = (e) => {
        e.preventDefault();
        // -------------------clearing error +success msg
        setError(null)
        setSuccess(null)

        // const UserName = e.target.username.value
        const Email = e.target.email.value
        const Password = e.target.password.value
        const Name = e.target.name.value
        const Photo = e.target.photoUrl.value
        const Terms = e.target.terms.checked
        // console.log('UserName:-', UserName)
        // console.log('Email:-', Email)
        // console.log('Password:-', Password)
        // console.log('Terms:-', (Terms))
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!Terms) {
            setError('Pleas accept all terms and conditions.')
            return
        }
        else if (Password.length < 6) {
            setError('Password should must be 6 character or more !!')
            return
        }
        else if (!passwordRegex.test(Password)) {
            setError('Password should contain a-z, A-Z, 0-9 and a special character.')
            return
        }


        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // ----------------------------Signed up 
                const user = userCredential.user;
                console.log(user)
                setSuccess('Sign Up Successful.')

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Email verification sent!')
                        // ...
                    });

                updateProfile(auth.currentUser, {
                    displayName: Name, photoURL: Photo
                }).then(() => {
                    console.log("  Profile updated!")

                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage
                )
                setError(errorMessage)
            })

        updateProfile(auth.currentUser, {
            displayName: Name, photoURL: Photo
        }).then(() => {
            // Profile updated!
            // ...
        })

    }

    const ShowpassWord = (e) => {
        e.preventDefault();
        setShow(!show)
    }



    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg')" }}>
            <div className=" p-8 max-w-md w-full my-5">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Create an Account</h2>
                <p className="text-center text-white mb-8">Join us and enjoy exclusive benefits!</p>

                <form onSubmit={HandleSignUp} className="space-y-6">


                    <div className="relative">
                        <input
                            type="Text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            id="photo"
                            name="photoUrl"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
                        >
                            Photo Link
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type={show ? "text" : "password"}
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute px-3 left-3 -top-3 text-white-500 bg-white transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-3 peer-focus:text-blue-500 rounded-xl peer-focus:border peer-focus:border-blue-500 text-xs"
                        >
                            Password
                        </label>
                        <button onClick={ShowpassWord} className="btn btn-ghost btn-xs absolute right-3 top-2 text-lg">
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input type="checkbox" name="terms" className="checkbox checkbox-warning" />
                            <span className=" text-white">Accept all terms and conditions</span>
                        </label>
                    </div>

                    {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}
                    {success && <p className="text-xs font-semibold text-green-500 text-center">{success}</p>}

                    <button type="submit" className="w-full btn btn-info text-white py-2 rounded-lg font-semibold">
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-white mt-6">
                    Already have an account?  <Link to={'/logIn'} className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpSection;

