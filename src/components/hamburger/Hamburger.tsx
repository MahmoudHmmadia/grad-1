import { FC } from "react";
import "./hamburger.scss";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { toggleLinks } from "../../app/slices/navSlice";
const Hamburger: FC = () => {
  const toggle = useSelector((state: any) => state.navSlice);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleLinks())}
      className={`${toggle ? "open" : ""} relative smooth pointer nav-icon`}
    >
      <span
        className={`absolute w-100 blue-bg ${toggle ? "red-bg" : ""}`}
      ></span>
      <span
        className={`absolute w-100 blue-bg ${toggle ? "red-bg" : ""}`}
      ></span>
      <span
        className={`absolute w-100 blue-bg ${toggle ? "red-bg" : ""}`}
      ></span>
    </div>
  );
};

export default Hamburger;
