import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  center = false,
  children,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? 'text-center' : 'text-center'}`}
    >
      <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-600 text-lg md:text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;