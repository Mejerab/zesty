import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
const Faq2 = () => {
    const [six, setSix] = useState(true);
    const [seven, setSeven] = useState(false);
    const [eight, setEight] = useState(false);
    const [nine, setNine] = useState(false);
    const [ten, setTen] = useState(false);
    return (
        <section>
                    <div className="pt-12 max-w-[1500px] mx-auto px-4 flex flex-row-reverse items-center justify-between">
                        <div className="space-y-5 w-[45%] rounded-[10px]">
                            <div data-aos='fade-right' data-aos-duration={700} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                                <input defaultChecked onClick={() => { setSix(true); setSeven(false); setEight(false); setNine(false); setTen(false) }} type="radio" id="check1" name="my-accordion-1" />
                                <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${six && 'border-b border-white'}`}>Hungry for Information?</div>
                                <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${six ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{six ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                                <div className="collapse-content">
                                    <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                        We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                                </div>
                            </div>
                            <div data-aos='fade-right' data-aos-duration={1000} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                                <input onClick={() => { setSeven(true); setSix(false); setEight(false); setNine(false); setTen(false) }} type="radio" id="check1" name="my-accordion-1" />
                                <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${seven && 'border-b border-white'}`}>Your Restaurant FAQs Answered.</div>
                                <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${seven ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{seven ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                                <div className="collapse-content">
                                    <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                        We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                                </div>
                            </div>
                            <div data-aos='fade-right' data-aos-duration={1300} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                                <input onClick={() => { setEight(true); setSeven(false); setSix(false); setNine(false); setTen(false) }} type="radio" id="check1" name="my-accordion-1" />
                                <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${eight && 'border-b border-white'}`}>Are pets allowed in the restaurant?</div>
                                <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${eight ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{eight ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                                <div className="collapse-content">
                                    <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                        We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                                </div>
                            </div>
                            <div data-aos='fade-right' data-aos-duration={1600} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                                <input onClick={() => { setNine(true); setSeven(false); setEight(false); setSix(false); setTen(false) }} type="radio" id="check1" name="my-accordion-1" />
                                <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${nine && 'border-b border-white'}`}>Can A reserve table depreciate in value? </div>
                                <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${nine ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{nine ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                                <div className="collapse-content">
                                    <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                        We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                                </div>
                            </div>
                            <div data-aos='fade-right' data-aos-duration={1900} className="collapse relative bg-[#111D21] border border-[#BABBC3]">
                                <input onClick={() => { setTen(true); setSeven(false); setEight(false); setNine(false); setSix(false) }} type="radio" id="check1" name="my-accordion-1" />
                                <div className={`collapse-title border-[#BABBC3] text-[20px] font-medium playfair flex items-center justify-between pr-5 text-xl ${ten && 'border-b border-white'}`}>What payment methods do you accept?</div>
                                <p className={`absolute top-0 right-0 p-[0.94rem]  rounded-tr-[10px] ${ten ? 'text-black bg-[#C9AB81]' : 'text-white bg-[#C9AB8133]'}`}>{ten ? <FaMinus className="text-3xl" /> : <FaPlus className="text-3xl" />}</p>
                                <div className="collapse-content">
                                    <p className="text-[16px] inter pt-4 w-[32rem]">we also offer catering services for events of all sizes, bringing the flavors of our restaurant to your doorstep.
                                        We prioritize customer satisfaction and strive to exceed expectations with every dish.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-left' className="relative w-[575.13px] h-[584.82px] mb-3 ml-3">
                            <div data-aos='zoom-in' className="bg-[#C9AB81] w-full h-full absolute top-3 right-3 rounded-[10px] rounded-tr-[200px]"></div>
                            <img className="relative" src="https://i.ibb.co.com/Mn1SQFz/Rectangle-32.png" alt="" />
                        </div>
                    </div>
                </section>
    );
};

export default Faq2;