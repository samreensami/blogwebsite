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
      <h1 className="text-4xl font-bold mb-10 pb-8"><i><u>Explore Indoor Plants</u></i></h1>
      <Image src="/img6.png" 
      alt="Aromatic Herb" 
      width="500"
        height="300"
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      Indoor plants bring nature beauty into your home and offer numerous benefits. 
      They help purify the air absorbing toxins and releasing oxygen creating a healthier living environment.
       These green companions can boost your mood and reduce stress providing a sense of tranquility.
        With their diverse shapes sizes and colors indoor plants add a touch of elegance and warmth to any space. 
        They can thrive in various indoor conditions making them suitable for different rooms and lighting situations. Caring for indoor plants is a rewarding hobby fostering a connection with nature and teaching patience. Popular choices include succulents spider plants and peace lilies each with unique care requirements and aesthetic appeal. Indoor plants can also improve concentration and productivity making them ideal for home offices. Incorporating them into your decor can transform your space into a serene inviting sanctuary.
       Whether you are a seasoned gardener or a beginner indoor plants offer a delightful way to enhance your home.


      </p>
    </section>
  );
};

export default Card1
