import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const variants = {
  hidden: { opacity: 0, x: -0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -0 },
};

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
    className=""
  >
    {children}
  </motion.main>
);

export default Layout;
