"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const imageSize = {
    width: 300,
    height: 300
  };

  const svgSize = {
    width: imageSize.width + 20,
    height: imageSize.height + 20
  };

  const circleVariants = {
    animate: {
      strokeDasharray: [
        "15 120 25 25",
        "16 25 95 72",
        "4 250 22 22"
      ],
      rotate: 360,
      transition: {
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    initial: {
      strokeDasharray: "24 20 0 0"
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative" style={{ width: svgSize.width, height: svgSize.height }}>
        <svg
          width={svgSize.width}
          height={svgSize.height}
          viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 z-10"
        >
          <motion.circle
            cx={svgSize.width / 2}
            cy={svgSize.height / 2}
            r={(Math.min(svgSize.width, svgSize.height) / 2) - 2}
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            variants={circleVariants}
            initial="initial"
            animate="animate"
          />
        </svg>
        <motion.div
          className="rounded-full overflow-hidden z-20 absolute"
          style={{
            top: '10px',
            left: '10px',
            width: imageSize.width,
            height: imageSize.height
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        >
          <div style={{ width: imageSize.width, height: imageSize.height }}>
            <Image
              src="/assets/photo.png"
              alt="Akhilesh Babu Tumati"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Photo;
