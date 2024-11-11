import { Outlet } from "react-router-dom";
import Navbar from "../Fixed/Navbar";
import Footer from "../Fixed/Footer";


const Roots = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="">
                <Outlet></Outlet>

                <Footer></Footer>
            </div>


        </div>
    );
};

export default Roots;