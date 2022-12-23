import { ReactElement } from "react";
import { FC } from "react";
import logo from "../../assets/images/logo.png";
import "./navbar.scss";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { BsCalendarCheckFill } from "react-icons/bs";
import { GiDandelionFlower } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import Hamburger from "../hamburger/Hamburger";
import { useSelector } from "react-redux/es/exports";
import NavLinkComponent from "../navLink/NavLinkComponent";
const Navbar: FC = (): ReactElement => {
  const toggle = useSelector((state: any) => state.navSlice);
  return (
    <nav className="white-bg pt-1 pb-1 box-shadow ">
      <div className="container flex align-center justify-between">
        <ul className={`links flex g-2 justify-end ${toggle ? "show" : ""}`}>
          {toggle && (
            <div className="icon cl-m txt-c fs-x-large">
              <GiDandelionFlower />
            </div>
          )}
          <NavLinkComponent title={"الصفحة الرئيسية"} icon={<AiFillHome />} />
          <NavLinkComponent title={"معلومات"} icon={<BsFillInfoCircleFill />} />
          <NavLinkComponent title={"خدمات"} icon={<AiTwotoneSetting />} />
          <NavLinkComponent title={"نصائح"} icon={<GiHealthNormal />} />
          <NavLinkComponent title={"حجز دور"} icon={<BsCalendarCheckFill />} />
        </ul>
        <Hamburger />
        <div className="logo flex">
          <img src={logo} alt="LOGO" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
