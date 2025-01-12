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
      <h1 className="text-4xl font-bold mb-10 pb-8"><i><u>Explore Aromatic Herb</u></i></h1>
      <Image 
      src="/b1.png" 
      alt="Aromatic Herb" 
      width="500"
        height="300"
      className=" h-auto rounded-lg mb-8 align-center" />
      <p className="text-lg">
      Aromatic herbs are a delightful addition to any garden kitchen or living space. 
      These herbs not only provide a burst of flavor to your culinary creations but also exude a 
      refreshing fragrance that can invigorate your senses. From the soothing scent of lavender to
       the invigorating aroma of mint these herbs offer a myriad of benefits. They can be used in cooking
       crafting aromatic oils or creating natural air fresheners. The therapeutic properties of aromatic 
       herbs are well-documented
        aiding in stress relief and promoting a sense of well-being.
         Growing aromatic herbs is also relatively easy making them accessible to both seasoned 
         gardeners and beginners alike. They thrive in various climates and require minimal maintenance.
          Beyond their practical uses aromatic herbs add a touch of nature beauty to any environment 
          with their lush green foliage and occasional blooms. Incorporating these herbs into your
           daily routine can transform your home into a sanctuary of tranquility and freshness.
            Whether you are brewing a calming tea or simply enjoying the fresh air
             aromatic herbs are a versatile and valuable part of any lifestyle. 


      </p>
    </section>
  );
};

export default Card1
