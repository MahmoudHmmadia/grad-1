import { motion } from "framer-motion";
import "./nav-link-component.scss";
interface link {
  title: string;
  icon: any;
}
const NavLinkComponent = ({ title, icon }: link) => {
  return (
    <>
      <motion.li
        whileHover={{
          color: "#2dc1e4",
        }}
        className="pointer bold relative centering-content g-1 link"
      >
        {title}
        <div className="icon flex">{icon}</div>
      </motion.li>
    </>
  );
};

export default NavLinkComponent;
