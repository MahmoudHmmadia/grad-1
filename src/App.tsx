import { FC } from "react";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import { FaTooth } from "react-icons/fa";
import { Provider } from "react-redux";
import "./sass/app.scss";
import store from "./app/store/store";
import Info from "./pages/info/Info";
import Advices from "./pages/advices/Advices";
import Services from "./pages/services/Services";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";

const App: FC = () => {
  return (
    <div className="app overflow-hidden relative">
      <Provider store={store}>
        <div className="home relative">
          <div className="shape">
            <div className="tooth-icon cl-m absolute fs-large">
              <FaTooth />
            </div>
          </div>
          <Navbar />
          <Landing />
        </div>
        <Info />
        <Services />
        <Advices />
        <Register />
        <Footer />
      </Provider>
    </div>
  );
};
export default App;
