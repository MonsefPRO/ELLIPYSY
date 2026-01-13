import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        rotateX: 25,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      // On retire transformStyle: 'preserve-3d' qui peut créer des bugs de clic
      // On ajoute pointerEvents: "auto" pour forcer la réactivité
      style={{
        perspective: '1000px', 
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  );
}
