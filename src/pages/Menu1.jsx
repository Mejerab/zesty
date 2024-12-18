import Banner from "./Banner";
import Footer from "./Home1/Footer";
import Navbar1 from "./Home1/Navbar1";
import Recipes from "./Home1/Recipes";
import Menu from "./Home2/Menu";
import Reserva2 from "./Home2/Reserva2";
import Stat from "./Home2/Stat";

const Menu1 = () => {
    return (
        <div className="bg-[#0C1315]">
            <div className="max-w-[1500px] mx-auto px-4">
                <Navbar1 outline />
            </div>
            <Banner link={'menu1'} name={'Our Menu 1'} />
            <div className="bg-[#111D21] mt-60">
                <Stat top />
                <div className="space-y-16 pb-36">
                    <Menu />
                    <Recipes />
                </div>
            </div>
            <Reserva2 />
            <Footer />
        </div>
    );
};

export default Menu1;