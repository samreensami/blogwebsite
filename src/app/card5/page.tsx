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
      <h1 className="text-4xl font-bold mb-10 pb-8"><i><u>Explore Healing Herbs</u></i></h1>
      <Image src="/img5.png" 
      alt="Aromatic Herb" 
      width="500"
        height="300"
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      Healing herbs have been valued for their medicinal properties for centuries. These plants offer 
      natural remedies for a variety of ailments, promoting health and well-being. 
      From soothing chamomile to invigorating rosemary healing herbs can be used in teas,
       salves
       and culinary dishes. Growing these herbs in your garden or indoors provides easy access 
       to their benefits. The simple act of tending to healing herbs can also be therapeutic
        fostering a sense of connection to nature. These plants are often hardy and adaptable
         making them suitable for gardeners of all skill levels. The knowledge of using healing herbs 
         has been passed down through generations and continues to be relevant today.
          Incorporating healing herbs into your routine can enhance your physical and emotional well-being.
           They offer a natural holistic approach to health care rooted in the wisdom of nature.
       Healing herbs remind us of the powerful and nurturing qualities of the plant world.


      </p>
    </section>
  );
};

export default Card1
