import { motion } from "framer-motion";

export const EaseInAnimation = ({ children, delay, ...rest }) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      //animate={{ x: 0 }}
      transition={{ ease: "easeIn", duration: 0.4, delay }}
      viewport={{ once: true }}
      whileInView={{ x: 0 }}
    >
      {children}
    </motion.div>
  );
};
EaseInAnimation.proptypes = {};

export default EaseInAnimation;
