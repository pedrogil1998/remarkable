import { motion } from "framer-motion";

export const TextInAnimation = ({ children, delay, ...rest }) => {
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
TextInAnimation.proptypes = {};

export default TextInAnimation;
