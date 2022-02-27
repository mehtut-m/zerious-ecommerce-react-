import { motion } from 'framer-motion';

const Container = ({ children }) => {
  return (
    <motion.main exit={{ opacity: 0 }} className="container mx-auto">
      <div className="container shadow-md my-6 rounded-lg border">
        {children}
      </div>
    </motion.main>
  );
};

export default Container;
