import About from "../../pages/About";
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
        </div>
    );
};

export default Home;