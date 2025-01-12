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
      <Image 
      src="/b2.png" 
      alt="Blooming Beauty" 
      width="500"
      height="300"
      className="h-auto rounded-lg mb-8 align-center" />
      
      <p className="text-lg">
      Blooming Beauty represents the vibrant colorful splendor of nature at its finest. 
      These flowers not only captivate with their striking hues but also uplift spirits with 
      their breathtaking appearance. Each blossom is a testament to the resilience and magnificence
       of the natural world offering a visual feast that brightens any space. The rich diversity of 
       blooming plants means there is always something new to discover from delicate petals to bold 
       dramatic blooms. Beyond their aesthetic appeal blooming flowers can have positive effects
        on mental well-being providing a sense of peace and joy. They are often used in celebrations 
        and rituals symbolizing growth renewal and the beauty of life itself. 
        Tending to these flowers can be a therapeutic hobby bringing a touch of nature
         elegance into your daily routine. With proper care blooming beauties can thrive and 
         flourish adding a continuous burst of color to gardens homes and public spaces. 
         Whether admired in a garden bed or displayed in a vase blooming flowers are a timeless 
         reminder of the wonders of the natural world.
      </p>
    </section>
  );
};

export default Card1
