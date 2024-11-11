import { Link } from "react-router-dom";


const link = <>

    <li><Link>Home</Link></li>
    <li><Link>Product</Link></li>
    <li><Link>About Us</Link></li>
</>

const Navbar = () => {
    return (
        <div className="sticky top-0">
            <div className="navbar bg-yellow-200 md:px-20 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-sm btn-circle btn-ghost lg:hidden">
                            <img className="w-10" src="https://img.icons8.com/clouds/100/menu.png" alt="menu" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link className="text-3xl font-serif font-bold">K-App</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/logIn'} className="btn btn-sm md:btn-md mx-2 btn-info">Log In</Link>
                    <Link to={'/signUp'} className="btn btn-sm md:btn-md btn-secondary">SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;