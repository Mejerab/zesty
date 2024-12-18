import { TiArrowRight } from "react-icons/ti";
import PointHook from "../../hooks/pointHook";

const News2 = () => {
    return (
        <div className="max-w-[1500px] mx-auto px-4">
            <div className="flex flex-col justify-center items-center">
                <PointHook text={'Our Latest Blog'} inter />
                <h3 className="playfair font-medium text-center text-[48px] text-[#C9AB81]">Our Latest News & Blog</h3>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-12 lg:grid-cols-3 gap-5">
                <div className="lg:space-y-5 col-span-2 space-y-12">
                    <div className="grid lg:grid-cols-2">
                        <div className="relative">
                            <img className="w-full" src="https://i.ibb.co.com/YNdxRdL/Image-5.png" alt="" />
                            <p className="absolute top-5 left-0 inter font-medium text-[16px] py-1 px-2 bg-[#C9AB81] rounded-r-lg">April 2, 2024</p>
                            <p className="inter font-medium text-[16px] bg-white text-black absolute bottom-10 left-5 py-1 px-2 rounded-[10px]">Latest Blog</p>
                        </div>
                        <div className="lg:rounded-r-lg h-full border lg:border-t border-t-0 lg:border-l-0 lg:pb-0 pb-5 mt-[1px] 2xl:pt-14 pt-8 border-[#C9AB81] pl-4 ">
                            <h4 className="playfair font-medium text-[32px] text-[#C9AB81] leading-[130%]">Exploring the Taste Adventures of Our Kitchen</h4>
                            <p className="text-[16px] leading-[150%] inter w-80 py-6">According to the specific details of the restaurant you&apos;re referring to! </p>
                            <button className="btn w-[170px] h-[53px] inter font-medium text-[16px] rounded-[10px] arrow hover:text-[#C9AB81] text-black hover:bg-black border-0 bg-[#C9AB81]">Read More <TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2">
                        <div className="relative">
                            <img className="w-full" src="https://i.ibb.co.com/2cZYtQk/Image-15.png" alt="" />
                            <p className="absolute top-5 left-0 inter font-medium text-[16px] py-1 px-2 bg-[#C9AB81] rounded-r-lg">April 2, 2024</p>
                            <p className="inter font-medium text-[16px] bg-white text-black absolute bottom-10 left-5 py-1 px-2 rounded-[10px]">Latest Blog</p>
                        </div>
                        <div className="lg:rounded-r-lg h-full lg:border-t border-t-0 border lg:pb-0 pb-5 lg:border-l-0 mt-[1px] 2xl:pt-14 pt-8 border-[#C9AB81] pl-4 ">
                            <h4 className="playfair font-medium text-[32px] text-[#C9AB81] leading-[130%]">Exploring the Taste Adventures of Our Kitchen</h4>
                            <p className="text-[16px] leading-[150%] inter w-80 py-6">According to the specific details of the restaurant you&apos;re referring to! </p>
                            <button className="btn w-[170px] h-[53px] inter font-medium text-[16px] rounded-[10px] arrow hover:text-[#C9AB81] text-black hover:bg-black border-0 bg-[#C9AB81]">Read More <TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <img className="w-full" src="https://i.ibb.co.com/NScvLcw/Image-6.png" alt="" />
                        <p className="absolute top-5 left-0 inter font-medium text-[16px] py-1 px-2 bg-[#C9AB81] rounded-r-lg">April 2, 2024</p>
                    </div>
                    <div className="lg:rounded-b-lg border border-t-0 2xl:h-[48.5%] lg:pb-0 pb-28 h-[49%] pt-[2.4rem] 2xl:pt-14 border-[#C9AB81] pl-4 ">
                        <h4 className="playfair font-medium text-[32px] text-[#C9AB81] leading-[130%]">Inside the Culinary World of Our Restaurant</h4>
                        <p className="text-[16px] leading-[150%] inter w-80 py-6">According to the specific details of the restaurant you&apos;re referring to! </p>
                        <button className="btn w-[170px] h-[53px] inter font-medium text-[16px] rounded-[10px] arrow hover:text-[#C9AB81] text-black hover:bg-black border-0 bg-[#C9AB81]">Read More <TiArrowRight className="transition-transform text-2xl -rotate-45" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News2;