import React from 'react';
import cloud from "../../img/cloud.jpg";
import photo1 from "../../img/night.jpg";  // Add paths to your images
import photo2 from "../../img/night2.png";  
import photo3 from "../../img/kitty2.jpg";  
import photo4 from "../../img/street.jpg";  
import photo5 from "../../img/street2.jpg";  
import photo6 from "../../img/dog.jpg";  // Replace with actual image paths
import { Header } from '../Header/Header';
import { Footer } from '../footer/Footer';



const Home = () => {
  return (
    <section>
      <div 
        className="h-screen bg-cover bg-center -mt-20 flex flex-col justify-end" 
        style={{ backgroundImage: `url(${cloud})` }}
      >
        <div className="relative text-center mb-20">
          <h1 className="text-black text-4xl md:text-6xl font-serif">Capturing Moments, One Frame at a Time</h1>
          <h1 className="text-black text-4xl mt-4 font-serif">Abdul Hannan</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <img src={photo1} alt="Landscape 1" className="w-full h-auto object-cover rounded-lg shadow-md" />
        <img src={photo2} alt="Landscape 2" className="w-full h-auto object-cover rounded-lg shadow-md" />
        <img src={photo3} alt="Landscape 3" className="w-full h-auto object-cover rounded-lg shadow-md" />
        <img src={photo4} alt="Landscape 4" className="w-full h-auto object-cover rounded-lg shadow-md" />
        <img src={photo5} alt="Landscape 5" className="w-full h-auto object-cover rounded-lg shadow-md" />
        <img src={photo6} alt="Landscape 6" className="w-full h-auto object-cover rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default Home;
