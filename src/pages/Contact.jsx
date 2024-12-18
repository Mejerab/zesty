import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import { FaHouseChimney } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import PointHook from "../hooks/pointHook";
import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
        if (name && email && !isNaN(phone) && message) {
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
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Phone number should be in number format. Press the button to Return.',
                icon: 'error',
                confirmButtonText: 'Return',
                background: '#C9AB81',
                customClass: {
                    confirmButton: 'confirm-swal'
                }
            })
        }

    }
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'contact-us'} name={'Contact Us'} />
            <div className="lg:grid hidden relative -top-[7.5rem] text-[16px] inter text-white rounded-[10px] grid-cols-3 w-[856px] mx-auto h-[242px] bg-[#111D21]">
                <div className="flex justify-center items-center flex-col gap-y-5">
                    <HiOutlineDevicePhoneMobile className="text-5xl text-[#C9AB81]" />
                    <h4 className="font-medium text-[#C9AB81]">Call Us</h4>
                    <p>(123) 4444 6565</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-y-5 mt-[1px]">
                    <FaHouseChimney className="text-5xl text-[#C9AB81]" />
                    <h4 className="font-medium text-[#C9AB81]">Address</h4>
                    <p>480 St Kilda Road, Australia</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-y-5">
                    <TfiEmail className="text-5xl text-[#C9AB81]" />
                    <h4 className="font-medium text-[#C9AB81]">Email Us</h4>
                    <p>contact@professional.com</p>
                </div>
            </div>
            <div className="py-24 flex lg:flex-row flex-col gap-y-12 justify-between items-center max-w-[1500px] mx-auto px-4">
                <div className="lg:w-[47%] py-12 pr-20 pl-9 bg-[#C9AB81] rounded-[10px]">
                    <PointHook black inter text={'Contact Us'} />
                    <h3 className="playfair text-[48px] font-medium text-black my-3">We can help you?</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="text" required name="name" className="w-full input bg-[#dfcdb3] pl-5 rounded-[10px] inter text-[14px] placeholder:text-black text-black h-[42px]" placeholder="Your Name" />
                        <input type="text" required name="email" className="w-full input bg-[#dfcdb3] pl-5 rounded-[10px] inter text-[14px] placeholder:text-black text-black h-[42px]" placeholder="Email Address" />
                        <input type="tel" required name="phone" className="w-full input bg-[#dfcdb3] pl-5 rounded-[10px] inter text-[14px] placeholder:text-black text-black h-[42px]" placeholder="Phone number" />
                        <textarea rows={5} required name="message" className="w-full textarea bg-[#dfcdb3] pl-5 rounded-[10px] inter text-[14px] placeholder:text-black text-black" placeholder="Write Your Message" />
                        <button className="btn tra hover:text-[#111D21] hover:bg-white border-0 text-white w-[189px] h-[67px] rounded-[10px] bg-[#111D21] inter font-medium text-[18px]">Contact Us</button>
                    </form>
                </div>
                <img src="https://i.ibb.co.com/tc3Q7dT/Contact-Us.png" alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;