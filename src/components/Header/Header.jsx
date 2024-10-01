import { useRef, useState } from "react";
import "./Header.css";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // to handle click outside of sidebar on mobile
  useOutsideAlerter(menuRef, setMenuOpened);

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className="bg-primary paddings wrapper"
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className="innerWidth container flexCenter">
        <div className="name">Suraj Gorai</div>
        <ul
          className="flexCenter menu"
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          {/* <li className="flexCenter phone">
            <p>+001 (313) 345 678</p>
            <BiPhoneCall size={"40px"} />
          </li> */}
        </ul>

        {/* for medium and small screens */}
        <div
          className="menuIcon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;