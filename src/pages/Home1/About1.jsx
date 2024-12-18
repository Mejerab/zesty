import { TiArrowRight } from "react-icons/ti";
import PointHook from "../../hooks/pointHook";

const About1 = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-4 lg:flex space-y-12 justify-between items-center">
            <div data-aos='fade-right' className="lg:w-1/2">
                <PointHook text={'About Us'} />
                <h2 className="playfair text-[40px] lg:text-[48px] py-4 text-[#C9AB81] font-medium leading-[120%]">Our Unique Dining Experience Healthy foods </h2>
                <p className="text-[16px] inter leading-[150%] lg:w-[30rem]">Feel free to customize this information according to the specific details of the restaurant you&apos;re referring to! If you need more specific details or have any other questions, just let me know</p>
                <div className="my-6 space-y-3 -ml-1">
                    <div data-aos='fade-right' data-aos-duration={700} className="flex items-center gap-x-2">
                        <img src="https://i.ibb.co.com/yQhzzH0/Group-63.png" alt="" />
                        <h4 className="text-[16px] font-medium inter text-[#BABBC3]">Prioritize whole, unprocessed foods</h4>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1000} className="flex items-center gap-x-2">
                        <img src="https://i.ibb.co.com/yQhzzH0/Group-63.png" alt="" />
                        <h4 className="text-[16px] font-medium inter text-[#BABBC3]">Enjoy treats in moderation</h4>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1300} className="flex items-center gap-x-2">
                        <img src="https://i.ibb.co.com/yQhzzH0/Group-63.png" alt="" />
                        <h4 className="text-[16px] font-medium inter text-[#BABBC3]">There Are Parking Available</h4>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1600} className="flex items-center gap-x-2">
                        <img src="https://i.ibb.co.com/yQhzzH0/Group-63.png" alt="" />
                        <h4 className="text-[16px] font-medium inter text-[#BABBC3]">A wide range of colorful fruits and vegetables</h4>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1900} className="flex items-center gap-x-2">
                        <img src="https://i.ibb.co.com/yQhzzH0/Group-63.png" alt="" />
                        <h4 className="text-[16px] font-medium inter text-[#BABBC3]">Unlimited Support</h4>
                    </div>
                </div>
                <button className="btn rounded-[10px] tra border-0 arrow inter text-[16px] font-medium w-[200px] h-[60px] bg-[#C9AB81] text-black hover:text-[#C9AB81] hover:bg-black hover:border-0">Explore More <TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
            </div>
            <div data-aos='fade-left' className="lg:w-1/2">
            <img className="w-fit ml-auto" src="https://i.ibb.co.com/7CDrRW0/Image-3.png" alt="" />
            </div>
        </div>
    );
};

export default About1;