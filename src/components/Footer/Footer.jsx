import { footerVariants, staggerChildren } from "../../utils/motion";
import  "./Footer.css";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="paddings footerWrapper">
      
      
      <motion.div
      variants={footerVariants}
      className="innerWidth yPaddings flexCenter footerContainer">
        <div className="left">
          <span className="primaryText">
            Let&apos;s make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:gorai.suraj@gmail.com">saying hi</a>
          </span>
        </div>

        <div className="right">
          <div className="info">
            <span className="secondaryText">Information</span>
            <p>Kolkata, WB, INDIA</p>
          </div>
          <ul className="menu">
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
