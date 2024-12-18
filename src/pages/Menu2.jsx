import Banner from "./Banner";
import Discount from "./Home1/Discount";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import SpecialFood1 from "./Home1/SpecialFood1";

const Menu2 = () => {
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'/menu2'} name={'Our Menu 2'} />
            <div className="space-y-24 pt-24">
                <SpecialFood1 />
                <Discount img />
                <Footer /> 
            </div>
        </div>
    );
};

export default Menu2;