import { Footer } from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Keunggulan from "./components/Keunggulan";
import Method from "./components/Method";
import Navigation from "./components/Navigation";
import Testimoni from "./components/Testimoni";

function App() {
    return (
        <div>
            <Navigation />
            <Jumbotron />
            <Keunggulan />
            <Method />
            <Testimoni />
            <Footer />
        </div>
    );
}

export default App;
