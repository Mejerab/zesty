import About1 from "./About1";
import ChooseUs from "./ChooseUs";
import Discount from "./Discount";
import Faq from "./Faq";
import Footer from "./Footer";
import Header1 from "./Header1";
import News from "./news";
import Recipes from "./Recipes";
import Reserva1 from "./Reserva1";
import SpecialFood1 from "./SpecialFood1";

const Home1 = () => {
    return (
        <div>
            <Header1 />
            <SpecialFood1 />
            <div className="bg-[#0c1315] space-y-28 pt-28">
               <About1 />
               <ChooseUs />
               <Recipes />
               <Discount />
               <Faq />
               <Reserva1 />
               <News />
               <Footer />
            </div>
        </div>
    );
};

export default Home1;