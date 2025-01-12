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
      <h1 className="text-4xl font-bold mb-10 pb-8"><i><u>Explore Handcrafted Elegance</u></i></h1>
      <Image src="/img8.png" 
      alt="Shade Lovers" 
      width={500}
        height={300}
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      The art of macramé brings a touch of handcrafted elegance to any space.
       This ancient technique of knotting ropes to create decorative items has made a remarkable 
       comeback in modern home decor. Macramé plant hangers like the one holding a terracotta pot in 
       the image are a perfect blend of functionality and aesthetics. These intricate designs not only 
       support the weight of the plants but also add an artistic flair to interiors. The white rope 
       contrasts beautifully with the earthy tones of terracotta creating a visually appealing 
       centerpiece. Handcrafted macrame items are a testament to the skill and creativity of artisans making each piece unique. Incorporating macramé into your decor can elevate the ambiance, infusing it with a sense of artistry and warmth. These pieces are versatile, complementing various styles from bohemian to contemporary.
       The resurgence of macramé highlights the enduring appeal of handmade crafts and their place in modern living.

      </p>
    </section>
  );
};

export default Card1
