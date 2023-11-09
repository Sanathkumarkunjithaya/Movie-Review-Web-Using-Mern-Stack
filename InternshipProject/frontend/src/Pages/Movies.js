import React from 'react';
import { useState } from 'react';
import Carousel from '../Components/carousel';
import Card from '../Components/card';
import Footer from '../Components/footer';
import Animal from '../Images/Animal.jpg';
import Salaar from '../Images/Salaar.jpg';
import Tiger from '../Images/Tiger.jpg';
import Sapth from '../Images/Sapth.jpg';
import Railway from '../Images/Railway.jpg';
import Sam from '../Images/Sam.jpg';
import Jailer from '../Images/Jailer.jpg';
import Mansion from '../Images/Mansion.jpg';
import Naruto from '../Images/Naruto.jpg';
import One from '../Images/One.jpg';
import Demon from '../Images/Demon.jpg';
import AOT from '../Images/AOT.jpg';
import Loki from '../Images/Loki.jpg';
import Farzi from '../Images/Farzi.jpg';
import Money from '../Images/Money.jpg';
import Break from '../Images/Break.jpg';
import CustomNavbar from '../Components/Navbar';

function Books() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  const generateCards = () => {
    const cardData = [
      { imageUrl: Animal,          title: 'Animal',    text: 'A sons love for his father. Often away due to work the father is unable to comprehend the intensity of his sons love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son.', rating:7.3, trailerLink: 'https://youtu.be/d0KCSSXunp0?feature=shared'  },
      { imageUrl: Salaar,          title: 'Salaar',    text: '“Salaar: Part 1 – Ceasefire” is an upcoming action-thriller, a brainchild of writer and director Prashanth Neel, backed by producer Vijay Kiragandur. The movie delves into the world of gangs and promises an adrenaline-pumping story',rating:6.5 ,trailerLink: 'https://youtu.be/D44Yku-oJcQ?feature=shared'  },
      { imageUrl: Tiger,         title: 'Tiger 3',              text: 'Following the events of Tiger Zinda Hai, War and Pathaan, Tiger and Zoya are framed as traitors by a revenge seeking terrorist named Aatish where they go on a life-threatening crusade to clear them and their familys name.',rating:6,trailerLink: 'https://youtu.be/vEjTUDjjU6A?feature=shared?feature=shared'   },
      { imageUrl: Sapth,        title: 'Apurva',                 text: 'A retired jailer goes on a manhunt to find his sons killers. But the road leads him to a familiar, albeit a bit darker place. Can he emerge from this complex situation successfully?',rating:8 ,trailerLink: 'https://youtu.be/YtVH3qz_XUA?feature=shared'  },
      
      { imageUrl: Railway,        title: 'The Railway Man',                 text: 'A former British Army officer, who was tortured as a prisoner of war at a Japanese labor camp during World War II, discovers that the man responsible for much of his treatment is still alive and sets out to confront him.',rating:7 ,trailerLink: 'https://youtu.be/5QzQ0lvMXpw?feature=shared'  },
      
      { imageUrl: Sam,        title: 'Sam Bahadur',                 text: 'Based on the life of Sam Manekshaw who was the Chief of the Army Staff of the Indian Army during the Indo-Pakistani War of 1971, and the first Indian Army officer to be promoted to the rank of field marshal.',rating:8.5 ,trailerLink: 'https://youtu.be/SfFLFYgpdTs?feature=shared'  },
      
      { imageUrl: Jailer,        title: 'Jailer',                 text: 'Apurva, a brilliant and enigmatic detective, is drawn into a complex web of deceit, secrets, and a dangerous conspiracy.',rating:7,trailerLink: 'https://youtu.be/xenOE1Tma0A?feature=shared'   },
      
      { imageUrl: Mansion,        title: 'Mansion 24',                 text: 'A brave young woman searches for her missing father in an old mansion, but the mansion is filled with scary things that keep happening to her. As she explores the mansion, she encounters creepy supernatural events.',rating:7.3,trailerLink: 'https://youtu.be/PAgmiobIauM?feature=shared'   },
      
      { imageUrl: Naruto,        title: 'Naruto',                 text: 'Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the villages leader and strongest ninja.',rating:8.5 ,trailerLink: 'https://youtu.be/QczGoCmX-pI?si=L5pd8n4ew9ThtItA'  },
      
      { imageUrl: One,        title: 'One piece',                 text: 'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".',rating:9,trailerLink: 'https://youtu.be/Ades3pQbeh8?si=Dui08d9HvGiFt6YL'   },
      
      { imageUrl: Demon,        title: 'Demon Slayer',                 text: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.',rating:8 ,trailerLink: 'https://youtu.be/VQGCKyvzIM4?si=_6BuYJvF53VJlIza'  },
      
      { imageUrl: AOT,        title: 'Attack on Titan',                 text: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',rating:8.9 ,trailerLink: 'https://youtu.be/E7WytLM2KvY?si=b-C0by5IbvPNL1ku'  },
      
      { imageUrl: Loki,        title: 'Loki',                 text: 'The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”',rating:9,trailerLink: 'https://youtu.be/rcQ_xZdzPBc?si=ia701dj3e4IKMOsj'   },
      
      { imageUrl: Farzi,        title: 'Farzi',                 text: 'An artist who gets pulled into the murky high stakes of a con job and a fiery task force officer on the mission to rid the country of his menaces in a fast-paced, edgy one-of-a-kind thriller.',rating:8 ,trailerLink: 'https://youtu.be/vEjTUDjjU6A?feature=shared?feature=shared'  },
      
      { imageUrl: Money,        title: 'Money Heist',                 text: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',rating:8 ,trailerLink: 'https://youtu.be/_InqQJRqGW4?si=l-UEQ1AcjOVP__9f'  },
      
      { imageUrl: Break,        title: 'Breaking Bad',                 text: 'Heres a look at the final eight episodes of Breaking Bad, which premieres on Sunday, August 11 at 9/8.A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his familys future..',rating:7.9 ,trailerLink: 'https://youtu.be/HhesaQXLuRY?si=n2and-ndKnWFutua'  },
     
      // Add more card data entries for each card
    ];

    const redirectToTrailer = (trailerLink) => {
      window.open(trailerLink, '_blank');
    };
  
    

    const filteredCardData = cardData.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredCardData.map(({ imageUrl, title, text,rating, trailerLink }, index) => (
    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Card imageUrl={imageUrl} title={title} text={text} rating={rating} /> <button onClick={() => redirectToTrailer(trailerLink)}>Watch Trailer</button>
    </div>
  ));
};

return (
  <div>
    <CustomNavbar/>
    <Carousel onSearchQuery={handleSearchQuery} />
    <div className="text-center bg-dark p-2 rounded shadow">
      <div className="text-white display-6 font-weight-bold" >
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

export default Books;