"use client";

import * as motion from "motion/react-client";

export default function ScrollTriggered() {
  return (
    <div className="mx-auto max-w-[500px] w-full py-24 pb-24">
      {food.map(([emoji, hueA, hueB], i) => (
        <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </div>
  );
}

function Card({ emoji, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i} relative flex justify-center items-start pt-5 mb-[-120px] overflow-hidden`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      {/* Splash Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',
          background,
        }}
      />

      {/* Animated Card */}
      <motion.div
        variants={cardVariants}
        className="text-[164px] w-[300px] h-[430px] flex justify-center items-center rounded-2xl bg-gray-100 shadow-lg origin-[10%_60%]"
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Data   ================
 */

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];