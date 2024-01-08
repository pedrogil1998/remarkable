import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const EaseAppearMotionAnimate = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
EaseAppearMotionAnimate.propTypes = {
  children: PropTypes.any,
};

export default EaseAppearMotionAnimate;
