import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="pt-5">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-black bg-opacity-40 p-1"
    >
      <Tab to="/" setPosition={setPosition}>Home</Tab>
      <Tab to="/portfolio" setPosition={setPosition}>Portfolio</Tab>
      <Tab to="/events" setPosition={setPosition}>Event</Tab>
      <Tab to="/about" setPosition={setPosition}>About</Tab>
      <Tab to="/contact" setPosition={setPosition}>Contact</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ to, children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white md:px-5 md:py-3 md:text-base"
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gray-700 md:h-12"
    />
  );
};
