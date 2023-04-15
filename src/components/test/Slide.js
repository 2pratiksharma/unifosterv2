import { motion } from "framer-motion";

const Slide = ({ index, activeIndex, imageUrl, title, text }) => {
  const isVisible = index === activeIndex;

  return (
    <div className="slide">
      <motion.img
        src={imageUrl}
        alt={title}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="slide-image"
      />
      <div className="overlay">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="slide-title"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="slide-text"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default Slide;
