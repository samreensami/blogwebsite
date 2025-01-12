'use client';
import Image from 'next/image';
import { useState } from 'react';
// components/HeroSection.js
<style jsx>
  {`
 .flip-container 
{ perspective: 1000px; 
  } .flip-card
  { transition: transform 0.6s;
    transform-style: preserve-3d; 
   } .flip-card:hover 
   { transform: rotateY(180deg);
     `}
     </style>


const HeroSection = () => { 
  const [flip, setFlip] = useState([false, false, false]);
   // State to track flip for each image
    const handleMouseEnter = (index: number) => { 
      const updatedFlip = [...flip];
       updatedFlip[index] = true; 
       setFlip(updatedFlip);
       };
        const handleMouseLeave = (index: number) => 
          { const updatedFlip = [...flip]; 
            updatedFlip[index] = false;
             setFlip(updatedFlip); 
            }; 
            return (
             <section className="bg-green-900 text-white py-10"> 
            <div className="container mx-auto">
               <div className="text-center mb-10"> 
                <h1 className="text-4xl font-bold mt-8 mb-8"><i><u>Welcome to Plantify</u></i></h1> <p 
                className="mt-8 text-xl">Your one-stop solution for all things green!</p> 
                </div> 
                <div className="flex justify-center mt-8 mb-8 gap-10 space-x-8">
                   <span className="block w-1/3 flip-container" onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)} > 
                    <Image
                     src="/img3.png" 
                     alt="Slide 1"
                      width={500} 
                      height={350} 
                      className={`flip-card transition-transform rounded-lg duration-300 ease-in-out transform ${flip[0] ? 'hover:rotateY-180' : ''}`}
                       /> 
                       </span>
                        <span className="block w-1/3 flip-container" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)} > 
                        <Image 
                        src="/img2.png" 
                        alt="Slide 2" 
                        width={500} 
                        height={350} 
                        className={`flip-card transition-transform rounded-lg duration-300 ease-in-out transform ${flip[1] ? 'hover:rotateY-180' : ''}`} /> 
                        </span>
                         <span className="block w-1/3 flip-container" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)} > 
                         <Image
                          src="/img1.png"
                           alt="Slide 3"
                            width={500}
                             height={350} 
                             className={`flip-card transition-transform rounded-lg duration-300 ease-in-out transform ${flip[2] ? 'hover:rotateY-180' : ''}`} /> 
                             </span> 
                             </div>
                              </div>
                               <style jsx>{`
                                .flip-container { perspective: 1000px; 
                                  }
                                   .flip-card { transition: transform 0.6s; 
                                   transform-style: preserve-3d; 
                                   } 
                                    .flip-card:hover { transform: rotateY(180deg);
                                     }
                         `}
                                </style>
                                 </section>
                                  );
                                 };
                                  export default HeroSection;