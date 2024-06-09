import React from 'react';

// Importing images
import img1 from '../../img/aunthelicopter.jpg';
import img2 from '../../img/cloud.jpg';
import img3 from '../../img/dog.jpg';
import img4 from '../../img/helicopter.jpg';
import img5 from '../../img/kitty2.jpg';
import img6 from '../../img/landscape.jpg';
import img7 from '../../img/moon.jpg';
import img8 from '../../img/mubashir.jpg';
import img9 from '../../img/mubashir2.png';
import img10 from '../../img/mubashir3.jpg';
import img11 from '../../img/navy.jpg';
import img12 from '../../img/night.jpg';
import img13 from '../../img/night2.png';
import img14 from '../../img/pfp.jpg';
import img15 from '../../img/race.jpg';
import img16 from '../../img/RAcolony.jpg';
import img17 from '../../img/selflightpainting.jpg';
import img18 from '../../img/selfpotrait2.jpg';
import img19 from '../../img/selfpotrait2.jpg';
import img20 from '../../img/street.jpg';
import img21 from '../../img/street2.jpg';
import img22 from '../../img/street3.jpg';
import img23 from '../../img/street4.png';
import img24 from '../../img/street5.png';
import img25 from '../../img/street6.png';
import img26 from '../../img/street7.jpg';
import img27 from '../../img/street8.jpg';
import img28 from '../../img/street9.jpg';
import img29 from '../../img/street10.png';
import img30 from '../../img/bike.png';
import img31 from '../../img/sheep.png';
import img32 from '../../img/tajhotel.png';
import img33 from '../../img/b&w.png';

const Portfolio = () => {
  // Array of images with their types
  const images = [
    { src: img1, type: 'landscape' },
    { src: img2, type: 'landscape' },
    { src: img3, type: 'landscape' },
    { src: img4, type: 'landscape' },
    { src: img5, type: 'landscape' },
    { src: img6, type: 'landscape' },
    { src: img7, type: 'landscape' },
    { src: img8, type: 'landscape' },
    { src: img9, type: 'landscape' },
    { src: img10, type: 'portrait' },
    { src: img11, type: 'landscape' },
    { src: img12, type: 'landscape' },
    { src: img13, type: 'landscape' },
    { src: img14, type: 'portrait' },
    { src: img15, type: 'landscape' },
    { src: img16, type: 'landscape' },
    { src: img17, type: 'landscape' },
    { src: img18, type: 'landscape' },
    { src: img19, type: 'landscape' },
    { src: img20, type: 'landscape' },
    { src: img21, type: 'landscape' },
    { src: img22, type: 'landscape' },
    { src: img23, type: 'landscape' },
    { src: img24, type: 'portrait' },
    { src: img25, type: 'portrait' },
    { src: img26, type: 'portrait' },
    { src: img27, type: 'portrait9x16' },
    { src: img28, type: 'landscape' },
    { src: img29, type: 'landscape' },
    { src: img30, type: 'portrait' },
    { src: img31, type: 'portrait' },
    { src: img32, type: 'portrait' },
    { src: img33, type: 'portrait' },
  ];

  const shuffledImages = shuffle(images);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-4xl font-bold mb-8'>My Portfolio</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {shuffledImages.map((image, index) => (
          <div key={index} className={`relative ${image.type === 'portrait' ? 'col-span-1 row-span-2' : ''} ${image.type === 'portrait9x16' ? 'col-span-1 row-span-3' : ''}`}>
            <img
              src={image.src}
              alt={`Portfolio ${index + 1}`}
              className={`w-full h-full object-cover ${image.type === 'portrait' ? 'aspect-w-4 aspect-h-5' : ''} ${image.type === 'landscape' ? 'aspect-w-16 aspect-h-9' : ''} ${image.type === 'portrait9x16' ? 'aspect-w-9 aspect-h-16' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default Portfolio;
