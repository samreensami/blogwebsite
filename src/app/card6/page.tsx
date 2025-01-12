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
      <h1 className="text-4xl font-bold mb-10 pb-8"><i><u>Explore Tropical Paradise</u></i></h1>
      <Image src="/img4.png" 
      alt="Tropical Paradise" 
      width="500"
        height="300"
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      
      Tropical paradise plants evoke images of lush rainforests and sun-drenched beaches. 
      These vibrant plants thrive in warm humid climates boasting bold colors and dramatic foliage. 
      Incorporating tropical plants into your space can create an exotic vacation-like atmosphere.
       The lush greenery and striking flowers add a sense of opulence and adventure to your garden or home. 
       Tropical plants often have unique adaptations such as large leaves and colorful blooms
        to thrive in their native environments. Caring for these plants can be a 
        rewarding experience as you recreate the conditions they need to flourish.
         From towering palms to delicate orchids tropical plants offer a diverse range of 
         options for any space. They bring a touch of the extraordinary to everyday life
          transforming ordinary spaces into tropical havens. The beauty and 
      vibrancy of tropical paradise plants inspire awe and wonder inviting you to embrace the 
      splendor of nature.

      </p>
    </section>
  );
};

export default Card1
