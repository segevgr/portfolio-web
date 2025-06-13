import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FadeOnScroll = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeOnScroll;
