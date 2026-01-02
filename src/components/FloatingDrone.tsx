import { motion } from 'framer-motion';

interface FloatingDroneProps {
  src: string;
  alt: string;
  className?: string;
}

export function FloatingDrone({ src, alt, className = '' }: FloatingDroneProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      animate={{
        y: [-8, 8, -8],
        rotateZ: [-1, 1, -1],
        rotateX: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    />
  );
}
