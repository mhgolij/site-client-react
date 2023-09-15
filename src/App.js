import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import { register } from "swiper/element/bundle";
import Footer from "./Components/Main/Footer";

function App() {
  register();
  return (
    <div className="App">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
