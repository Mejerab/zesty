import { IoIosArrowDown, IoMdCart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar1 = ({ outline }) => {
    const links = <>
        <li className="transition-colors relative drop">
            <button className="flex items-center">Home <IoIosArrowDown /></button>
            <ul className="absolute top-12 bg-[#0c1315] w-44 rounded-[10px] tra p-6 space-y-4 z-50">
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/'>Home 1</Link></li>
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/home2'>Home 2</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#C9AB81] transition-colors"><Link to='/about-us'>About Us</Link></li>
        <li className="transition-colors relative drop">
            <button className="flex items-center">Menu <IoIosArrowDown /></button>
            <ul className="absolute top-12 bg-[#0c1315] w-44 rounded-[10px] tra p-6 space-y-4 z-50">
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/menu1'>Menu 1</Link></li>
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/menu2'>Menu 2</Link></li>
            </ul>
        </li>
        <li className="transition-colors relative drop">
            <button className="flex items-center">Blog <IoIosArrowDown /></button>
            <ul className="absolute top-12 bg-[#0c1315] w-44 rounded-[10px] tra p-6 space-y-5 z-50">
            <li className="hover:text-[#C9AB81] transition-colors"><Link to='/blog1'>Blog 1</Link></li>
            <li className="hover:text-[#C9AB81] transition-colors"><Link to='/blog2'>Blog 2 </Link></li>
            <li className="hover:text-[#C9AB81] transition-colors"><Link to='/blog2'>Blog 2 </Link></li>
            </ul>
        </li>
        <li className="transition-colors relative drop">
            <button className="flex items-center">Pages <IoIosArrowDown /></button>
            <ul className="absolute top-12 bg-[#0c1315] w-44 rounded-[10px] tra p-6 space-y-4 z-50">
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/chef'>Chef</Link></li>
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/reservation'>Reservation</Link></li>
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/testimonials'>Testimonials</Link></li>
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/faq'>FAQ</Link></li>
                <li className="hover:text-[#C9AB81] transition-colors"><Link to='/choose-us'>Why Choose Us</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#C9AB81] transition-colors"><Link to='/contact-us'>Contact Us</Link></li>
        <li className="hover:text-[#C9AB81] transition-colors"><Link to='/my-shop'>My Shop</Link></li>
    </>
    return (
        <div className="navbar px-0 z-20 items-center bg-transparent h-[7.5rem] inter">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                        <div className="items-center gap-x-6 flex ml-3 mt-4 pb-4">
                            <IoSearch className="text-[#C9AB81] transition-colors hover:text-white text-2xl" />
                            <Link to='/cart'><IoMdCart className="text-[#C9AB81] transition-colors hover:text-white text-2xl" /></Link>
                        </div>
                    </ul>
                </div>
                <Link to='/' className="flex items-center gap-x-3"><img src="https://i.ibb.co.com/DQBCY3M/Vector.png" alt="" /><span className="playfair font-medium text-[32px]">Zesty</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="inter z-20 flex -ml-6 items-center mt-1 gap-x-9 text-[18px] font-normal">
                    {links}
                    {!outline && <div className="items-center gap-x-6 flex">
                        <IoSearch className="text-[#C9AB81] transition-colors hover:text-white text-2xl" />
                        <Link to='/cart'><IoMdCart className="text-[#C9AB81] transition-colors hover:text-white text-2xl" /></Link>
                    </div>}
                </ul>
            </div>
            <div className="navbar-end mt-1 z-20">
                {outline && <div className="hidden lg:flex items-center gap-x-6 mr-8">
                    <IoSearch className="text-[#C9AB81] transition-colors hover:text-white text-2xl" />
                    <Link to='/cart'><IoMdCart className="text-[#C9AB81] transition-colors hover:text-white text-2xl" /></Link>
                </div>}
                <Link to='/' className={`btn rounded-[10px] w-[131px] h-[46px] text-[18px] font-medium hover:text-white hover:bg-[#C9AB81] ${outline ? 'bg-transparent text-[#C9AB81] border border-[#C9AB81]' : 'bg-white text-black border-0'}`}>Sign In</Link>
            </div>
        </div>
    );
};
Navbar1.propTypes = {
    outline: PropTypes.bool
}

export default Navbar1;