import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import Recipes from "./Home1/Recipes";
import Chefs from "./Home2/Chefs";
import SpecialFood2 from "./Home2/SpecialFood2";

const ChefPage = () => {
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'Chef'} name={'Chef'} />
            <div className="space-y-24 pt-24">
                <Chefs />
                <Recipes />
                <div className="pt-20 pb-44">
                    <SpecialFood2 />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChefPage;