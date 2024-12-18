import Banner from "./Banner";
import ChooseUs from "./Home1/ChooseUs";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import Recipes from "./Home1/Recipes";

const WhyChooseUs = () => {
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'choose-us'} name={'Why Choose Us'} />
                <div className="space-y-32 py-24">
                    <ChooseUs img/>
                    <Recipes />
                </div>
            <Footer />
        </div>
    );
};

export default WhyChooseUs;