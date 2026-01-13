import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface Hover3DCardProps {
  children: ReactNode;
  className?: string;
}

export function Hover3DCard({ children, className = '' }: Hover3DCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Remplace 7.5 par 3
const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg']);
const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px', // Ajout de perspective pour stabiliser le clic
      }}
      className={className}
    >
      <div 
        style={{ 
          transform: 'translateZ(0px)', // Réduit à 0 pour coller au plan de clic
          transformStyle: 'preserve-3d',
          position: 'relative',
          zIndex: 50 // Force le contenu au premier plan
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
