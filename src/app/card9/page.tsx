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
      <h1 className="text-4xl font-bold mb-10 pb-8"><i><u>Explore </u></i></h1>
      <Image src="/b1.png" 
      alt="Aromatic Herb" 
      width="500"
        height="300"
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      Hanging clips for vases are a creative and practical solution for displaying your favorite plants and flowers. 
      These clips securely hold your vases allowing you to create stunning vertical displays that save space 
      and enhance your decor. Whether you are working with limited space or simply want to add a unique touch 
      to your interiors hanging clips offer a versatile option. They are easy to install and can be used with a
       variety of vase sizes and shapes. By elevating your plants you not only create a visually appealing 
       arrangement but also promote better air circulation for healthier plants. These clips are perfect for 
       creating a cascading effect with trailing plants or showcasing a collection of colorful blooms. 
       They can be used indoors or outdoors making them a flexible addition to any home or garden. 
       Incorporating hanging clips into your decor allows you to experiment with different heights and arrangements
        adding depth and dimension to your space. Transform your living area into a green oasis with the help of
         hanging clips for vases bringing nature closer to your daily life.


      </p>
    </section>
  );
};

export default Card1
