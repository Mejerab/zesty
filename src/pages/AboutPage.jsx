import Banner from "./Banner";
import About1 from "./Home1/About1";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import Recipes from "./Home1/Recipes";
import Reserva1 from "./Home1/Reserva1";
import Chefs from "./Home2/Chefs";
import SpecialFood2 from "./Home2/SpecialFood2";
import Stat from "./Home2/Stat";
import Testimonial from "./Home2/Testimonial";

const AboutPage = () => {
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'/about-us'} name={'About Us'} />
            <div className="space-y-24 pt-44">
                <SpecialFood2 />
                <About1 />
                <Recipes />
                <Stat />
                <Testimonial />
                <Reserva1 />
                <Chefs />
                <Footer />
            </div>
        </div>
    );
};

export default AboutPage;