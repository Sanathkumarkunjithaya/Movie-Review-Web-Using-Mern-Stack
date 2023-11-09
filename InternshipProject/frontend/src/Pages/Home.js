import React from 'react';
import { useState } from 'react';
import Card from '../Components/card';
import Footer from '../Components/footer';
import Animal from '../Images/Animal.jpg';
import Salaar from '../Images/Salaar.jpg';
import Tiger from '../Images/Tiger.jpg';
import Sapth from '../Images/Sapth.jpg';
import CustomNavbar from '../Components/Navbar';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  const generateCards = () => {
    const cardData = [
      { imageUrl: Animal,          title: 'Animal',    text: 'A sons love for his father. Often away due to work the father is unable to comprehend the intensity of his sons love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son.',rating:7.3 },
      { imageUrl: Salaar,          title: 'Salaar',    text: '“Salaar: Part 1 – Ceasefire” is an upcoming action-thriller, a brainchild of writer and director Prashanth Neel, backed by producer Vijay Kiragandur. The movie delves into the world of gangs and promises an adrenaline-pumping story' ,rating:6.5},
      { imageUrl: Tiger,         title: 'Tiger 3',              text: 'Following the events of Tiger Zinda Hai, War and Pathaan, Tiger and Zoya are framed as traitors by a revenge seeking terrorist named Aatish where they go on a life-threatening crusade to clear them and their familys name.',rating:6 },
      { imageUrl: Sapth,        title: 'Apurva',                 text: 'Apurva, a brilliant and enigmatic detective, is drawn into a complex web of deceit, secrets, and a dangerous conspiracy.',rating:8 },
     
      // Add more card data entries for each card
    ];

    const filteredCardData = cardData.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredCardData.map(({ imageUrl, title, text, rating }, index) => (
    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Card imageUrl={imageUrl} title={title} text={text} rating={rating} />
    </div>
  ));
};

return (
  <div>
    <CustomNavbar/>
    <div className="text-center bg-dark p-2 rounded shadow">
      <div className="text-white display-6 font-weight-bold" >
        Trending Movies.
      </div>
    </div>
    <div className="container">
      <div className="row">
        {generateCards()}
      </div>
    </div>
    <Footer />
  </div>
);
}

export default Home;