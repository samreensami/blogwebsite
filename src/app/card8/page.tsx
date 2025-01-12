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
      alt="Online Plant Haven" 
      width="500"
        height="300"
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      
      This websites provide a wide variety of plants from indoor beauties to outdoor wonders
       catering to different tastes and needs. The ease of browsing and purchasing plants online
       saves time and effort allowing you to explore a diverse selection from the comfort of your home.
        Detailed descriptions and care instructions ensure that even novice gardeners can successfully 
        grow and maintain their chosen plants. These stores often provide gardening accessories and tools
         making them a one-stop shop for all your gardening needs. Home delivery options add to the convenience
          bringing your green treasures directly to your doorstep. The availability of native and exotic plant 
          species supports biodiversity and enhances the aesthetic appeal of your space.
           Online plant stores also offer seasonal discounts and promotions making it easier to
            find affordable greenery. By shopping online you can transform your living spaces into lush
             green sanctuaries promoting a healthier and more vibrant environment.




Message Copilot

      </p>
    </section>
  );
};

export default Card1
