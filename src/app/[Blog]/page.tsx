import Image from 'next/image';

// components/Cards.js
const Cards = () => {
    const cardsData = [
      {
        image: "/b1.png",
        title: "Aromatic Herb",
        description: "Discover the refreshing aroma of our finest herbs.",
        link: "/card1",
      },
      {
        image: "/b2.png",
        title: "Blooming Beauty",
        description: "Experience the vibrant colors of our blooming.",
        link: "/card2",
      },
      {
        image: "/b3.png",
        title: "Lush Greenery",
        description: "Enhance your space with lush, green foliage.",
        link: "/card3",
      },
      {
        image: "/img6.png",
        title: "Indoor plants",
        description: "This is a brief description of card 4.",
        link: "/card4",
      },
      {
        image: "/img5.png",
        title: "Healing Herbs",
        description: "This is a brief description of card 5.",
        link: "/card5",
      },
      {
        image: "/img4.png",
        title: "Tropical Paradise 6",
        description: "This is a brief description of card 6.",
        link: "/card6",
      },
      {
        image: "/img8.png",
        title: "Shade Lovers",
        description: "This is a brief description of card 7.",
        link: "/card7",
      },
      {
        image: "/img7.png",
        title: "Online Plant Haven",
        description: "This is a brief description of card 8.",
        link: "/card8",
      },
      {
        image: "/img9.png",
        title: "Hanging Clips for Vases",
        description: "This is a brief description of card 9.",
        link: "/card9",
      },
    ];
  
    return (
      <section className="bg-green-900 py-8 pt-10 ">
        <div className="text-center mb-8">
          <h1 className="text-4xl mt-8 mb-8 font-bold"><i><u>Discover Our Green Treasures</u></i></h1>
          <p className=" text-xl">Explore our curated collection of beautiful plants. Each selection is perfect for enhancing the charm of your space!</p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsData.map((card, index) => (
              <div key={index} 
              className="bg-black rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
                <Image
                 src={card.image}
                 alt={card.title} 
                  width={450}
                   height={350}
                 className="w-full h-48 object-cover transition duration-500 hover:opacity-90" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="mb-4">{card.description}</p>
                  <a href={card.link} className="text-green-700 hover:text-green-300 transition duration-500">
                    Read More
                 </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Cards;
  