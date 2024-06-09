import React from "react";
import aboutImage from "../../img/pfp.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container p-8">
      <h1 className="text-center text-4xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden">

        <div className="md:w-1/2 p-6">
          <p className="text-gray-800 mb-4">
            Hello! My name is Abdul Hannan, and I'm a passionate photographer
            based in Mumbai. Over the past 3 years, I've
            dedicated myself to capturing the world through my lens, finding
            beauty in every moment and telling stories through my photographs.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Journey
          </h2>
          <p className="text-gray-700 mb-4">
            My journey into photography started 3 years ago when I picked
            up my first camera. What began as a hobby quickly turned into a
            lifelong passion. I have explored various genres of photography,
            including landscapes, portraits, street photography, and events,
            always seeking to learn and grow in my craft.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Philosophy
          </h2>
          <p className="text-gray-700 mb-4">
            I believe that photography is not just about taking pictures; it's
            about capturing emotions, preserving memories, and telling stories.
            Whether it's the serene beauty of a landscape, the vibrant energy of
            a city street, or the intimate moments of a special event, I strive
            to create images that resonate with people and evoke feelings.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-700 mb-4">
            I am always excited to connect with new people, whether it's for a
            photography project, a collaboration, or just to share stories and
            experiences. Feel free to reach out to me through. <br /><br />
            Thank you for visiting my portfolio. I look forward to capturing
            beautiful moments with you! <br /> <br />
          </p>
          <Link to='/portfolio' className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 mt-8 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Visit Portfolio
          </Link>
        </div>

        <div className="md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={aboutImage}
            alt="About Me"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
