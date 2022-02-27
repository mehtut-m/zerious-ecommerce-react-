import { motion } from 'framer-motion';

const blackBox = {
  initial: {
    height: '100%',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    //   <div className="absolute inset-0 flex items-center justify-center load-screen">
    //     <motion.div
    //       className="relative w-full bg-black z-[1000] load-screen"
    //       initial="initial"
    //       animate="animate"
    //       variants={blackBox}
    //       onAnimationStart={() => document.body.classList.add('overflow-hidden')}
    //       onAnimationComplete={() => {
    //         document.body.classList.remove('overflow-hidden');
    //         document.querySelector('.load-screen').classList.add('h-0');
    //       }}
    //     />
    //   </div>

    // );
    <motion.div
      className="fixed z-[1000] flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add('overflow-hidden')}
      onAnimationComplete={() =>
        document.body.classList.remove('overflow-hidden')
      }
    >
      <motion.svg variants={textContainer} className="absolute z-[1001] flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-primary"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold logo font-['Quicksand'] text-white"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: 'url(#pattern)' }}
        >
          Zrious
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default InitialTransition;
