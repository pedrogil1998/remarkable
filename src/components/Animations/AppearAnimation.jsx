import { motion } from "framer-motion";

export const EaseAppearMotion = ({ children, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
EaseAppearMotion.proptypes = {};

export default EaseAppearMotion;
