import { useEffect, useState } from "react";
import Image from "next/image";

const activities: string[] = [
  "listening to house music",
  "doing bench presses",
  "playing Age of Empires II",
  "shaking my hips to disco",
  "eating tortellini, kiwi & broccollini",
  "only pressing tab, Copilot <3",
  "navigating life with ADHD",
  "caching my thoughts on paper",
  "multitasking my way through life",
  "applying my creative imagination",
  "adding underlines to all my logos",
  "loving tailwindcss",
  "hoping TypeScript will never leave me",
  "reading lots of Wikipedia articles",
  "enjoying the instant feedback of web dev",
  "sailing the seas",
];

const Header = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState<number>(14);

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
    <div className="flex flex-col items-center justify-center py-8  sm:pt-16 sm:pb-8">
      <h1
        className={`text-5xl font-semibold drop-shadow-lg ${
          currentActivityIndex === 10 && "underline"
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
      <div className="mt-4 flex flex-row items-center justify-center gap-x-4 rounded-lg bg-slate-900 p-4 shadow-inner">
        <a href="https://github.com/lindman-carl">
          <Image
            src="/github-mark.svg"
            alt="github social"
            width="32"
            height="32"
          />
        </a>
        <a href="https://linkedin.com/">
          <Image
            src="/linkedin-mark.svg"
            alt="linkedin social"
            width="32"
            height="32"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
