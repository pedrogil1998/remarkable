import { motion } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
  hover: {
    rotateY: 0.3,
    scale: 1.3,
    transition: {
      rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity },
    },
  },
};
export const RotateAnimation = ({ children, ...rest }) => {
  return (
    <motion.div
      scale={1}
      rotation={[Math.PI / 2, 0, 2 * Math.PI]}
      whileHover="hover"
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
RotateAnimation.propTypes = {
  children: PropTypes.any,
};

export default RotateAnimation;
