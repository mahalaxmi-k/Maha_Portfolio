import React from "react";
import { motion, useInView } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  maxValue: number;
  size: number;
  strokeWidth: number;
  text: string;
  color: string;
  textSize?: "small" | "medium" | "large";
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  maxValue,
  size,
  strokeWidth,
  text,
  color,
  textSize = "medium",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference * 0.8;
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center"
    >
      <svg className="w-full h-auto" viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle
          strokeWidth={strokeWidth * 0.4}
          stroke="#E5E7EB"
          fill="transparent"
          r={radius * 0.8}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Animated Progress Circle */}
        <motion.circle
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={circumference}
          animate={isInView ? { strokeDashoffset: circumference - (value / maxValue) * circumference } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
          stroke={color}
          fill="transparent"
          r={radius * 0.8}
          cx={size / 2}
          cy={size / 2}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>

      {/* Text in Center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className={`font-bold ${textSize === "small" ? "text-lg sm:text-xl md:text-2xl lg:text-3xl" : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"}`}
          style={{ color }}
        >
          {value}%
        </motion.span>
        <span
          className={`font-medium text-black ${textSize === "small" ? "text-xxs sm:text-xs md:text-sm" : "text-xs sm:text-sm md:text-base lg:text-lg"}`}
        >
          {text}
        </span>
      </div>
    </motion.div>
  );
};

export default CircularProgressBar;