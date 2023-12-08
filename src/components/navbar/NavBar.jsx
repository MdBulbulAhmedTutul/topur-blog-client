import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter, FaXmark } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import '../../components/navbar/nav.css'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    const navItem = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Sevices" },
        { path: "/about", link: "About" },
        { path: "/blog", link: "Blog" },
        { path: "/contact", link: "Contact" }
    ]
    return (
        <header className="bg-black text-white fixed top-0 right-0 left-0 z-10">
            <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/">
                    <h2 className="text-xl font-bold text-white">Tutul<span className="text-orange-500">DS</span></h2>
                </Link>

                {/* navitems for lg device */}
                <ul className="md:flex gap-12 hidden text-lg">
                    {
                        navItem.map(({ path, link }) => <li className="text-white" key={path}>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                                to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>

                {/* menu icon */}
                <div className="text-white lg:flex items-center gap-4 hidden">
                    <a href="/" className="hover:text-orange-500 text-lg"><FaFacebookSquare></FaFacebookSquare></a>
                    <a href="/" className="hover:text-orange-500 text-lg"><FaTwitter></FaTwitter></a>
                    <a href="/" className="hover:text-orange-500 text-lg"><FaSquareInstagram></FaSquareInstagram></a>
                    <Link to="/login">
                        <button className="bg-orange-600 text-white font-semibold rounded-sm px-4 py-2 hover:bg-white hover:text-black transition-all duration-200 ease-in">Login</button>
                    </Link>
                </div>

                {/* mobile menu icon */}
                <div className="md:hidden w-4 h-4">
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaXmark className="text-lg"></FaXmark> : <FaBars className="text-lg"></FaBars>
                        }
                    </button>
                </div>
            </nav>
            {/* only mobile device nav menu */}
            <div>
                <ul className={`md:hidden gap-12 block text-lg space-y-4 px-4 py-6 mt-14 bg-orange-200 text-black ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all duration-150 ease-out" : "hidden"}`}>
                    {
                        navItem.map(({ path, link }) => <li className="" key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header >
    );
};

export default NavBar;