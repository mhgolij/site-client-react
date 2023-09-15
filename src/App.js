import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import { register } from 'swiper/element/bundle';

function App() {
  register();
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
