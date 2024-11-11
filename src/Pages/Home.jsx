import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>



            <div className="relative bg-gradient-to-r from-purple-700 to-indigo-600 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute w-96 h-96 bg-purple-400 opacity-20 rounded-full -top-20 -left-20 animate-pulse"></div>
                    <div className="absolute w-80 h-80 bg-indigo-400 opacity-20 rounded-full top-32 right-10 animate-pulse"></div>
                    <div className="absolute w-64 h-64 bg-pink-400 opacity-20 rounded-full bottom-20 left-40 animate-pulse"></div>
                </div>

                {/* Banner Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg my-5 font-serif">
                        Wel<span className="text-sky-300">come</span> to K-APP
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                        Discover the <span className="text-yellow-300">Future</span> of Reading
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        Dive into thousands of books, connect with readers, and unlock endless knowledge.
                    </p>
                    <Link to={'/logIn'}>
                        <button className="mt-8 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg">
                            Log In
                        </button>
                    </Link>
                    <Link to={'/signUp'}>
                        <button className="mt-8 mx-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition duration-300 shadow-lg">
                            Sign Up
                        </button></Link>

                </div>

                {/* Decorative Lines */}
                <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-75"></div>
                <div className="absolute bottom-4 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-yellow-400 opacity-50 animate-pulse"></div>
            </div>


        </div>
    );
};

export default Home;