import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const activities: string[] = [
  "listening to house music",
  "doing bench presses",
  "playing Age of Empires II",
  "shaking my hips to disco",
  "eating tortellini, kiwi & broccollini",
  "only pressing tab, Copilot <3",
  "navigating life with ADHD",
  "applying my creative imagination",
  "adding underlines to all my logos",
  "loving tailwindcss",
  "multitasking my way through life",
  "hoping TypeScript will never leave me",
  "reading lots of Wikipedia articles",
  "enjoying the instant feedback of web dev",
  "sailing the seas",
];

const variant = {
  hidden: { opacity: 0, x: -0, y: -0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1 },
  },
};

const Header = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState<number>(7);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentActivityIndex < activities.length - 1) {
        setCurrentActivityIndex(currentActivityIndex + 1);
      } else {
        setCurrentActivityIndex(0);
      }
    }, 10000);

    return () => clearInterval(timer);
  }, [currentActivityIndex]);
  return (
    <div className="flex flex-col items-center justify-center pt-12 pb-8 sm:pt-16 sm:pb-8">
      <h1
        className={`text-5xl font-semibold drop-shadow-lg ${
          currentActivityIndex === 8 && "underline decoration-orange-500"
        }`}
      >
        Carl Lindman
      </h1>
      <div className="flex grid-cols-2 flex-col py-4 font-semibold drop-shadow-lg sm:grid">
        <span className="text-center sm:text-right">
          I build web apps while&nbsp;
        </span>
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-center text-transparent sm:text-left">
          {activities[currentActivityIndex]}
        </span>
      </div>
      <div className="flex w-full max-w-md flex-col items-center justify-center px-4">
        <div className="relative top-8 z-20 mt-4 flex max-w-fit flex-row items-center justify-center gap-x-4 rounded-lg bg-orange-500 p-4 drop-shadow-lg">
          <a href="https://github.com/lindman-carl">
            <Image
              src="/github-mark.svg"
              alt="github social"
              width="40"
              height="40"
              className="drop-shadow"
            />
          </a>
          <a href="https://linkedin.com/">
            <Image
              src="/linkedin-mark.svg"
              alt="linkedin social"
              width="40"
              height="40"
              className="drop-shadow"
            />
          </a>
        </div>
        <motion.div
          layout
          className="z-10 flex h-full flex-col items-center justify-center rounded-lg bg-slate-900 p-4 px-8 text-justify shadow-inner"
        >
          <motion.div layout="position" className="mt-6 pb-4 text-sm">
            I am a self-taught full stack web developer excited by building
            complex stateful web apps with React.js heavily utilizing
            TypeScript.
          </motion.div>
          {open && (
            <motion.div layout="position" variants={variant}>
              <div>
                <h3>skills</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                repudiandae officia, aut iste, nemo quae nobis accusamus commodi
                id dolores sunt asperiores dolorum libero voluptas voluptate
                amet facilis saepe deleniti.
              </div>
            </motion.div>
          )}
        </motion.div>
        {!open && (
          <button
            className=" relative bottom-6 z-20 w-full max-w-fit rounded-lg  bg-slate-900 py-2 px-4"
            onClick={() => setOpen(!open)}
          >
            <span className="w-full text-lg font-bold text-white underline decoration-orange-500">
              learn more
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
