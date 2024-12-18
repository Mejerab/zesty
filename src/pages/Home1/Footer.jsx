import Swal from "sweetalert2";
import PointHook from "../../hooks/pointHook";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
            Swal.fire({
                title: 'Success!',
                text: 'Press the button to continue',
                icon: 'success',
                confirmButtonText: 'Continue',
                background: '#C9AB81',
                customClass: {
                    confirmButton: 'confirm-swal'
                }
            })
            e.target.reset();
        }
    }
    return (
        <div className="bg-[url(https://i.ibb.co.com/FJNcJdm/Image-1.png)]">
            <footer className="bg-[#111D21D6] bg-cover bg-no-repeat">
                <div className="pt-24 pb-10 max-w-[1500px] mx-auto px-4 grid gap-y-12 grid-cols-2 lg:flex justify-between">
                    <ul data-aos='fade-right' className="text-[16px] inter text-[#BABBC3]">
                        <h4 className="playfair font-medium text-[24px] text-[#C9AB81]">Product</h4>
                        <div className="space-y-[0.89rem] mt-[0.89rem]">
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Breakfast</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Lunch</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Desserts</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Dinner</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Chefs</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Reservation</button></li>
                        </div>
                    </ul>
                    <ul data-aos='fade-down' className="text-[16px] inter text-[#BABBC3]">
                        <h4 className="playfair font-medium text-[24px] text-[#C9AB81]">Information</h4>
                        <div className="space-y-[0.89rem] mt-[0.89rem]">
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Blog Standard</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ FAQ</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Support</button></li>
                        </div>
                    </ul>
                    <ul data-aos='fade-up' className="text-[16px] inter text-[#BABBC3]">
                        <h4 className="playfair font-medium text-[24px] text-[#C9AB81]">Company</h4>
                        <div className="space-y-[0.89rem] mt-[0.89rem]">
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ About Us</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Food Menu</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ New Recipe </button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Chefs</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Testimonial</button></li>
                            <li className="hover:text-[#C9AB81] tra "><button><span>/</span>/ Contact</button></li>
                        </div>
                    </ul>
                    <div data-aos='fade-left' className="col-span-2 bg-[url(https://i.ibb.co.com/ZgTJDxy/Image-2.png)] bg-cover bg-no-repeat w-full lg:w-[602px] h-fit lg:h-[270px] rounded-[10px]">
                        <div className="pt-8 h-full rounded-[10px] w-full px-4 lg:px-12 bg-[#00000099]">
                            <PointHook text={'Subscribe'} inter />
                            <h4 className="text-[48px] font-medium playfair text-[#C9AB81]">To Our News Letter</h4>
                            <form onSubmit={handleSubmit} className="mt-8 lg:space-x-9 space-x-4 lg:pb-0 pb-8">
                                <input type="email" name="email" className="input w-[210px] lg:w-[317px] h-[59px] bg-white placeholder:text-[#00000099] text-black focus:border-0" placeholder="Enter Your Mail" required />
                                <button className="w-[120px] lg:w-[151.62px] inter font-medium text-[16px] hover:text-[#C9AB81] hover:bg-black
                                 tra h-[60px] border-0 btn rounded-[10px] bg-[#C9AB81] text-black">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="py-6 max-w-[1500px] mx-auto px-4">
                    <div className="w-full mx-auto h-[2px] bg-[#ffffff33] mb-6"></div>
                    <div className="flex lg:flex-row flex-col gap-y-6 justify-between items-center">
                        <Link to='/' className="flex items-center gap-x-3"><img src="https://i.ibb.co.com/DQBCY3M/Vector.png" alt="" /><span className="playfair font-medium text-[32px]">Zesty</span></Link>
                        <ul className="flex items-center gap-x-5 text-[#BABBC3] text-[16px] inter">
                            <li className="hover:text-[#C9AB81] tra"><button>FAQ</button></li>
                            <li className="hover:text-[#C9AB81] tra"><button>Reservation</button></li>
                            <li className="hover:text-[#C9AB81] tra"><button>Chefs</button></li>
                        </ul>
                        <div className="flex gap-x-2">
                            <button className="bg-[#C9AB81] flex justify-center items-center tra text-black hover:text-[#C9AB81] hover:bg-black !w-[35px] !h-[34px] rounded-full"><FaInstagram className="text-xl" /></button>
                            <button className="bg-[#C9AB81] flex justify-center items-center tra text-black hover:text-[#C9AB81] hover:bg-black !w-[35px] !h-[34px] rounded-full"><RiFacebookFill className="text-xl" /></button>
                            <button className="bg-[#C9AB81] flex justify-center items-center tra text-black hover:text-[#C9AB81] hover:bg-black !w-[35px] !h-[34px] rounded-full"><FaSkype className="text-[1.1rem]" /></button>
                            <button className="bg-[#C9AB81] flex justify-center items-center tra text-black hover:text-[#C9AB81] hover:bg-black !w-[35px] !h-[34px] rounded-full"><FaLinkedinIn className="text-[1rem]" /></button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;