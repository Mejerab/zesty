import Footer from "../Home1/Footer";
import Recipes from "../Home1/Recipes";
import About2 from "./About2";
import Chefs from "./Chefs";
import Header2 from "./Header2";
import Menu from "./Menu";
import News2 from "./News2";
import Reserva2 from "./Reserva2";
import SpecialFood2 from "./SpecialFood2";
import Stat from "./Stat";
import Testimonial from "./Testimonial";

const Home2 = () => {
    return (
        <div>
            <Header2 />
            <div className="bg-[#0c1315] space-y-24 pt-44">
                <SpecialFood2 />
                <About2 />
                <div className="bg-[#111D21] pb-24 space-y-14">
                    <Stat top={true}/>
                    <Menu />
                    <Recipes />
                </div>
                <Chefs />
                <Testimonial />
                <Reserva2 />
                <News2 />
                <Footer />
            </div>
        </div>
    );
};

export default Home2;