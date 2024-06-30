// import Crossdiv1 from "./components/Crossdiv/Crossdiv1";
import Home from "./components/Home/Home";
import Masonry from "./components/Masonry/Masonry";
import Ourvison from "./components/Ourvision/Ourvison";
import Cards from "./components/Cards/Cards";
import Haveques from "./components/Haveques/Haveques";
import Stepper from "./components/Stepper/Stepper";

function App() {
  return (
    <div>
      <Home />
      <div className="redLine"></div>
      <Ourvison />
      {/* <Crossdiv1 /> */}
      <Cards />
      <Masonry />
      <Stepper />
      <Haveques />
    </div>
  );
}

export default App;
