import React from 'react'
import Image from 'next/image'

const Card1 = () => {
  return (
    <div>
      <InfoSection />
    </div>
  )
}

const InfoSection = () => {
  return (
    <section className="bg-green-900 text-center text-white mt-4 mb-4 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-10 pb-8"><i><u>Explore Lush Greenery</u></i></h1>
      <Image src="/b3.png" 
      alt="Aromatic Herb" 
      width="500"
        height="300"
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      
      Lush greenery brings an incredible sense of calm and serenity to any environment. 
      The dense vibrant foliage of plants creates a refreshing and rejuvenating atmosphere 
      perfect for relaxation. Greenery helps purify the air providing a healthier living space. 
      The presence of plants can improve mental well-being reduce stress levels and promote a sense of peace. 
      Caring for lush greenery can be a rewarding hobby fostering a connection with nature. Whether in a garden
       balcony or indoor space greenery adds a touch of natural beauty and elegance. The varying shades and 
       textures of green leaves create a visually appealing and harmonious aesthetic. Lush plants are not only 
       beautiful but also beneficial for the environment supporting local wildlife and ecosystems. 
      Incorporating lush greenery into your surroundings can transform your space into a tranquil sanctuary.

      </p>
    </section>
  );
};

export default Card1
