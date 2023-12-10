import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Services from "../../pages/Services";
import Carusel from "../carusel/Carusel";

const Home = () => {
    return (
        <div>
            <div>
                <Carusel></Carusel>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;