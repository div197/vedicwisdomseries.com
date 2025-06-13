import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode;
  delay?: number; // Optional delay for staggered animations
  slideFrom?: 'left' | 'right' | 'bottom' | 'top'; // Direction to slide from
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, slideFrom = 'bottom', ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger once when 20% visible
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getInitialPosition = () => {
      switch(slideFrom) {
          case 'left': return { x: -50 };
          case 'right': return { x: 50 };
          case 'top': return { y: -50 };
          case 'bottom':
          default: return { y: 50 };
      }
  }

  return (
    <Box ref={ref} {...rest}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...getInitialPosition() },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default AnimatedSection; 
