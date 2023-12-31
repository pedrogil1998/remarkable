import { AnimatePresence, motion } from "framer-motion";

export const EaseInAnimation = ({ children, delay, ...rest }) => {
  return (
    <AnimatePresence>
      <motion.div
        //animate={{ x: 0 }}
        // transition={{ ease: "easeIn", duration: 0.4, delay }}
        // // viewport={{ once: true }}
        // // whileInView={{ x: 0 }}
        // // exit={{ opacity: 0 }}
      
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
EaseInAnimation.proptypes = {};

export default EaseInAnimation;
