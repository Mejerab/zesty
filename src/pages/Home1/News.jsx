import { HiOutlineUserCircle } from "react-icons/hi";
import PointHook from "../../hooks/pointHook";
import { TiArrowRight } from "react-icons/ti";

const News = () => {
    return (
        <div>
            <div data-aos='fade-down' className="mx-auto w-fit">
                <PointHook text={'Our Latest News'} inter />
            </div>
            <h3 data-aos='fade-down' className="text-center mt-1 playfair font-medium text-[45px] lg:text-[48px] text-[#C9AB81]">Our Latest News & Articles</h3>
            <div className="pt-12 max-w-[1500px] mx-auto px-4 grid lg:grid-cols-3 justify-between items-center gap-x-8 gap-y-12">
                <div data-aos='fade-right' className="rounded-[10px]">
                    <img className="w-full" src="https://i.ibb.co.com/qYy92kK/Image-16.png" alt="" />
                    <div className="px-3 pt-6">
                        <div className="flex items-center gap-x-2">
                            <HiOutlineUserCircle className="text-[1.2rem] -mt-[0.1rem] text-[#C9AB81]" />
                            <p className="text-[16px] inter text-[#BABBC3]">Admin</p>
                        </div>
                        <h4 className="playfair mt-6 mb-5 text-[32px] font-medium">Inside the Culinary <br /> World of Our Restaurant</h4>
                        <button className="btn w-[170px] h-[53px] tra font-medium arrow hover:bg-black hover:text-[#C9AB81] tra text-[16px] inter bg-[#C9AB81] text-black rounded-[10px] border-0 hover:border-0">Read More<TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
                    </div>
                </div>
                <div data-aos='fade-up' className="rounded-[10px]">
                    <img className="w-full" src="https://i.ibb.co.com/mc6Lty0/Image-17.png" alt="" />
                    <div className="px-3 pt-6">
                        <div className="flex items-center gap-x-2">
                            <HiOutlineUserCircle className="text-[1.2rem] -mt-[0.1rem] text-[#C9AB81]" />
                            <p className="text-[16px] inter text-[#BABBC3]">Admin</p>
                        </div>
                        <h4 className="playfair mt-6 mb-5 text-[32px] font-medium">Behind the Scenes of Our Signature Dishes"</h4>
                        <button className="btn w-[170px] h-[53px] tra font-medium arrow hover:bg-black hover:text-[#C9AB81] tra text-[16px] inter bg-[#C9AB81] text-black rounded-[10px] border-0 hover:border-0">Read More<TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
                    </div>
                </div>
                <div data-aos='fade-left' className="rounded-[10px]">
                    <img className="w-full" src="https://i.ibb.co.com/t29C77L/Image.png" alt="" />
                    <div className="px-3 pt-6">
                        <div className="flex items-center gap-x-2">
                            <HiOutlineUserCircle className="text-[1.2rem] -mt-[0.1rem] text-[#C9AB81]" />
                            <p className="text-[16px] inter text-[#BABBC3]">Admin</p>
                        </div>
                        <h4 className="playfair mt-6 mb-5 text-[32px] font-medium">Insider&apos;s Look at Life in Our Restaurant Kitchen</h4>
                        <button className="btn w-[170px] h-[53px] tra font-medium arrow hover:bg-black hover:text-[#C9AB81] tra text-[16px] inter bg-[#C9AB81] text-black rounded-[10px] border-0 hover:border-0">Read More<TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;