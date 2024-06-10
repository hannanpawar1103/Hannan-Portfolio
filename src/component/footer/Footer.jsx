import React from "react";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaPinterest, FaGithub, FaXTwitter, FaReddit, FaDiscord } from "react-icons/fa6";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { useAnimate } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <SocialMediaLinks />
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; 2024 Abdul Hannan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Follow Me</h2>
      <div className="divide-y divide-neutral-900 border border-neutral-900">
        <div className="grid grid-cols-2 divide-x divide-neutral-900">
          <LinkBox Icon={IoMail} href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlFmHvrckCZCXRhRKdRHfNzMxFFsxBfWgnNNDrbTNSGVsqcqNbpHLKvjTVTRlBQCxhTqqq" />
          <LinkBox Icon={FaInstagram} href="https://www.instagram.com/abdul_.raw/" />
        </div>
        <div className="grid grid-cols-4 divide-x divide-neutral-900">
          <LinkBox Icon={FaGithub} href="https://github.com/hannanpawar1103" />
          <LinkBox Icon={FaXTwitter} href="https://x.com/abdul_1103" />
          <LinkBox Icon={FaReddit} href="https://www.reddit.com/user/abdulhannan1103/" />
          <LinkBox Icon={SiFacebook} href="https://www.facebook.com/abdulhannan.pawar/" />
        </div>
        <div className="grid grid-cols-3 divide-x divide-neutral-900">
          <LinkBox Icon={FaDiscord} href="https://discord.com/channels/@me" />
          <LinkBox Icon={FaPinterest} href="https://in.pinterest.com/hannanpawar1103/" />
          <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/pawar-abdul-643132261/" />
        </div>
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

