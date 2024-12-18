import PointHook from "../../hooks/pointHook";

const About2 = () => {
    return (
        <div className="py-16 pb-44 max-w-[1500px] mx-auto px-4 flex lg:flex-row flex-col gap-y-20 justify-between items-center gap-x-12">
            <div className="mt-3 relative w-fit">
                <div data-aos='custom-rotate' className="w-[390px] -top-2 -right-2 h-[537px] bg-transparent border-2 border-[#C9AB81] rounded-[10px] absolute"></div>
                <div data-aos='custom-rotate2' className="w-[390px] -top-2 -right-2 h-[537px] bg-transparent border-2 border-[#C9AB81] rounded-[10px] absolute"></div>
                <img className="relative" src="https://i.ibb.co.com/rxbccy1/Rectangle-6.png" alt="" />
                <div className="absolute -bottom-5 -right-8 flex justify-center items-center flex-col bg-[#C9AB81] w-[189px] h-[275px] rounded-full border-8 border-[#0C1315] text-black">
                    <h4 className="playfair text-[48px] font-medium">20+</h4>
                    <p className="inter font-medium text-[16px] text-center">Year of Experience in Food </p>
                </div>
            </div>
            <div className="lg:w-1/2">
                <PointHook text={'About Us'} inter/>
                <h3 className="playfair py-3 font-medium text-[37px] lg:text-[48px] text-[#C9AB81]">We Are Provide Best quality & Healthy foods </h3>
                <p className="inter text-[16px] lg:w-[33.5rem]">Feel free to customize this information according to the specific details of the restaurant you&apos;re referring to! If you need more specific details or have any other questions, just let me know</p>
                <div className="flex lg:flex-row flex-col my-6 ml-1 justify-between">
                    <div className="flex gap-x-5 items-center">
                        <img className="-ml-5" src="https://i.ibb.co.com/KwdH8nT/Group-11.png" alt="" />
                        <h4 className="text-[24px] w-56 lg:-ml-6 font-medium playfair text-[#C9AB81]">100% Guaranteed Organic Food</h4>
                    </div>
                    <div className="flex items-center lg:ml-0 -ml-5">
                        <img className="w-fit" src="https://i.ibb.co.com/VYSrT6G/Group-11-1.png" alt="" />
                        <h4 className="text-[24px] w-56 lg:ml-0 ml-5 font-medium playfair text-[#C9AB81]">Best - Quality Healthy Foods </h4>
                    </div>
                </div>
                <p className="bg-[#EFF1F20a] relative text-[16px] w-fit lg:py-0 py-4 px-4 lg:px-14 inter flex justify-center items-center ml-1 leading-[150%] rounded-[10px] border-l-8 border-[#C9AB81] lg:h-[111px]">
                    With a warm and inviting ambiance, our restaurant provides the perfect setting for any occasion, whether it&apos;s a casual lunch, intimate dinner, or special celebration. Our attentive staff is dedicated to providing exceptional service, </p>
            </div>
        </div>
    );
};

export default About2;