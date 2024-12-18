import { FaMinus, FaPlus } from "react-icons/fa6";
import PointHook from "../../hooks/pointHook";
import { useState } from "react";

const Faq = () => {

    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [four, setFour] = useState(false);
    const [five, setFive] = useState(false);
    return (
        <section>
            <div className="w-96 text-center mx-auto">
                <div data-aos='fade-down' className="w-fit mx-auto">
                    <PointHook text={'FAQ'} />
                </div>
                <h3 data-aos='fade-down' className="text-[48px] mt-3 playfair font-medium text-[#c9ab81]">Do You Have Any Questions?</h3>
            </div>
            <div className="pt-12 max-w-[1500px] mx-auto px-4 flex gap-y-12 lg:flex-row flex-col items-center justify-between">
                <div className="space-y-5 w-full lg:w-1/2 rounded-[10px]">
                    <div data-aos='fade-right' data-aos-duration={700} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                        <input defaultChecked onClick={() => { setOne(true); setTwo(false); setThree(false); setFour(false); setFive(false) }} type="radio" id="check1" name="my-accordion-1" />
                        <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${one && 'border-b border-white'}`}><p className="lg:w-full w-[14rem]">What is the project idea?</p></div>
                        <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${one ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{one ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                        <div className="collapse-content">
                            <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1000} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                        <input onClick={() => { setTwo(true); setOne(false); setThree(false); setFour(false); setFive(false) }} type="radio" id="check1" name="my-accordion-1" />
                        <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${two && 'border-b border-white'}`}><p className="lg:w-full w-[14rem]">How We can Verify The Reservation?</p></div>
                        <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${two ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{two ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                        <div className="collapse-content">
                            <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1300} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                        <input onClick={() => { setThree(true); setTwo(false); setOne(false); setFour(false); setFive(false) }} type="radio" id="check1" name="my-accordion-1" />
                        <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${three && 'border-b border-white'}`}><p className="lg:w-full w-[14rem]">Are pets allowed in the restaurant?</p></div>
                        <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${three ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{three ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                        <div className="collapse-content">
                            <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1600} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                        <input onClick={() => { setFour(true); setTwo(false); setThree(false); setOne(false); setFive(false) }} type="radio" id="check1" name="my-accordion-1" />
                        <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${four && 'border-b border-white'}`}><p  className="lg:w-full w-[14rem]">Can A reserve table depreciate in value? </p></div>
                        <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${four ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{four ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                        <div className="collapse-content">
                            <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                        </div>
                    </div>
                    <div data-aos='fade-right' data-aos-duration={1900} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                        <input onClick={() => { setFive(true); setTwo(false); setThree(false); setFour(false); setOne(false) }} type="radio" id="check1" name="my-accordion-1" />
                        <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${five && 'border-b border-white'}`}><p  className="lg:w-full w-[14rem]">What payment methods do you accept?</p></div>
                        <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${five ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{five ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                        <div className="collapse-content">
                            <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left' className="relative lg:w-[549.89px] w-full h-[400px] lg:h-[592px] mt-2 mr-2">
                    <div data-aos='zoom-in' className="bg-[#C9AB81] w-full h-full absolute -top-4 lg:-top-2 -right-3 lg:-right-2 lg:rounded-tr-[100px] rounded-tr-[80px] rounded-[10px] rounded-bl-[100px]"></div>
                    <img className="relative" src="https://i.ibb.co.com/k0Df23S/Image-15.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Faq;