import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const TextInAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.04,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
TextInAnimation.propTypes = {
  children: PropTypes.any,
};

export default TextInAnimation;
