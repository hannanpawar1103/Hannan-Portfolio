import React from 'react';
import img1 from "../../img/Mithibai.jpg"
import img2 from '../../img/race.jpg';
import img3 from '../../img/Shri_Sathya_Sai_1.jpg'

const events = [
  {
    title: 'Mithibai College - Mithaas Event',
    date: 'March 2022',
    description: 'The Mithibai College Mithaas Event was a vibrant and colorful celebration that brought together students, faculty, and alumni for a day filled with music, dance, and cultural performances. As a photographer, capturing the essence of this event was both challenging and rewarding. The event featured a variety of activities, including traditional dance performances, musical acts, and interactive booths that showcased the diverse talents and cultures of the college community.',
    image: img1,
  },
  {
    title: 'Wockhart Hospital',
    date: 'November 2023',
    description: 'The Wockhardt Run 2023 for Children was an inspiring and joyful event aimed at promoting health and fitness among young participants. Held in the lush, green surroundings of the city park, this event saw a massive turnout of children, parents, and volunteers. As a photographer, capturing the essence of this heartwarming event was both an honor and a delightful experience. The run was not just about winning; it was about participation, fun, and fostering a spirit of community and well-being among children.',
    image: img2, // Replace with the actual image path
  },
  {
    title: 'Shri Sathya Sai Hospital',
    date: 'April 2023',
    description: "The Shri Sathya Sai Hospital event, graced by the legendary cricketer Sunil Gavaskar, was a memorable occasion that combined health awareness with the excitement of meeting a sports icon. This special event aimed to promote health and wellness, especially among children and young athletes. Sunil Gavaskar's presence added a layer of inspiration, making the day unforgettable for all attendees. As a photographer, capturing the essence of this event was an incredible experience, from the interactions with the chief guest to the various activities organized by the hospital.",
    image: img3, // Replace with the actual image path
  },
];

const EventCard = ({ event, isImageOnLeft }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row mb-8">
      {isImageOnLeft ? (
        <>
          <img className="md:w-1/2 w-full h-auto object-cover" src={event.image} alt={event.title} />
          <div className="md:w-1/2 w-full p-4 text-left m-auto">
            <h1 className="text-4xl font-semibold text-gray-800">{event.title}</h1>
            <p className="text-gray-600 text-2xl">{event.date}</p>
            <p className="text-gray-700 font-serif ">{event.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 w-full p-4 text-left m-auto">
            <h1 className="text-4xl font-semibold text-gray-800">{event.title}</h1>
            <p className="text-gray-600 text-2xl">{event.date}</p>
            <p className="text-gray-700 font-serif ">{event.description}</p>
          </div>
          <img className="md:w-1/2 w-full h-auto object-cover" src={event.image} alt={event.title} />
        </>
      )}
    </div>
  );
};

const Events = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mt-8 mb-8">Events Covered in the Past Two Years</h1>
      <div>
        {/* First Event Card: Image on the Left */}
        <EventCard event={events[0]} isImageOnLeft={true} />
        
        {/* Second Event Card: Image on the Right */}
        <EventCard event={events[1]} isImageOnLeft={false} />
        
        {/* Third Event Card: Image on the Left */}
        <EventCard event={events[2]} isImageOnLeft={true} />
        
      </div>
    </div>
  );
};

export default Events;
