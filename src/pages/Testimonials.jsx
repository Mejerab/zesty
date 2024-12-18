import { useEffect, useState } from "react";
import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import { Rating, Star } from "@smastrom/react-rating";

const Testimonials = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    console.log(datas);
    const customColor = {
        itemShapes: Star,
        activeFillColor: '#C9AB81'
    }
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'menu1'} name={'Testimonial'} />
            <div className="py-24 grid lg:grid-cols-2 gap-x-5 gap-y-7 max-w-[1500px] mx-auto px-4">
                {
                    datas.map(data =>
                        <div key={data.id} className="w-full bg-[#111D21] p-12 border border-[#C9AB8133] rounded-[10px]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={data.image} alt="" />
                                    <div className="pl-5 space-y-1">
                                        <h4 className="playfair font-medium text-[20px] text-[#C9AB81]">{data.name}</h4>
                                        <p className="inter text-[16px] text-[#BABBC3]">Customer</p>
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={5}
                                            readOnly
                                            className="lg:ml-0 -ml-1"
                                            itemStyles={customColor}
                                        />
                                    </div>
                                </div>
                                <img className="lg:block hidden w-[100px] h-[74.99px]" src="https://i.ibb.co.com/XyrvMfn/Icon-Solid-Quote-1.png" alt="" />
                            </div>
                            <div className="w-full h-[2px] rounded-[10px] bg-[#C9AB81] my-8"></div>
                            <p className="inter text-[16px]">Restaurant marketing has become much more complicated in the past few years. Competition is heating up and people looking to fill their stomachs now have an array of possible options.</p>
                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    );
};

export default Testimonials;