import Hero from "./Components/Hero";

import "./App.css"
import Program from "./Components/Program";
import Reason from "./Components/Reason";
import Plans from "./Components/Plans";
import Testimonials from "./Components/Testimonials";
import JoinUs from "./Components/JoinUs";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
    <Hero/>
    <Program/>
    <Reason/>
    <Plans/>
    <Testimonials/>
    <JoinUs />
    <Footer/>
    </div>
  );
}

export default App;
