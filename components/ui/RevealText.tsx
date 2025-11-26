import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
    children: string;
    delay?: number;
    className?: string;
}

const RevealText: React.FC<RevealTextProps> = ({ children, delay = 0, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <span ref={ref} className={`inline-block overflow-hidden align-bottom ${className}`}>
            <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    );
};

export default RevealText;
