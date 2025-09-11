// filepath: /c:/Users/nurfa/OneDrive/Documents/A_CODING/nextjs/tefa-mp/src/hooks/useScrollAnimation.js
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
};

export default useScrollAnimation;