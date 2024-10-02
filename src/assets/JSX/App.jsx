import React, { Component } from 'react';
import './reset.css';
import './style.css';
import './header.css';
import './character-ratings.css';
import './character-cards.css';

// data for App component
const data = {
  characters: [
    { name: "Alphonse Elric", skill: "Being Loveable, Alchemy", votes: 110 },
    { name: "Edward Elric 'Full Metal Alchemist'", skill: "Alchemy, Human Transmutation", votes: 100 },
    { name: "Hawkeye", skill: "Sniper, Loyal AF", votes: 95 },
    { name: "Mj. Armstrong", skill: "Alchemy, Muscles", votes: 94 },
    { name: "Nina", skill: "Loving Dogs, Being Adorable", votes: 93 }
  ],
  cards: [
    {
      name: "Alex Louis Armstrong", nickname: "Major Armstrong",
      imgUrl: "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
      description: "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show"
    },
    {
      name: "Alphonse Elric",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg",
      description: "Alphonse is a walking suit of armor on a quest to find his real body"
    },
    {
      name: "Edward Elric", nickname: "The Fullmetal Alchemist",
      imgUrl: "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
      description: "Edward is a master alchemist and our main character... just don't call him short"
    },
    {
      name: "Greed",
      imgUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg",
      description: "Greed is one of the seven deadly sins Homunculi. He's the most 'on our side' of all of them."
    },
    {
      name: "Nina Tucker",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dK-tXCnVxbSeSJuCKmiX0zUbnCEV1ss54DeOYgXUHSE0WB23TAUD4a3itwFbzJ9fkg&usqp=CAU",
      description: "Nina is an adorable little girl! If you've watched FMA you know..."
    }
  ],
  links: ["About Us", "Info", "Support Us"]
};

// Functional Component using props
const Header = ({ links }) => (
  <header>
    <h1>Fullmetal Alchemist</h1>
    <nav>
      {links.map((link, index) => <li key={index}>{link}</li>)}
    </nav>
  </header>
);

// Functional Component for Table Row with conditional class rendering
const CharacterRow = ({ char, index }) => (
  <tr className={index % 2 === 0 ? 'light' : 'dark'}>
    <td>{char.name}</td>
    <td>{char.skill}</td>
    <td>{char.votes}</td>
  </tr>
);

// Class Component using props
class CharacterRatings extends Component {
  render() {
    const { characters } = this.props;
    return (
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr><th>Name</th><th>Skillset</th><th>Votes</th></tr>
          </thead>
          <tbody>
            {characters.map((char, index) => (
              <CharacterRow key={index} char={char} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

// Abstracted CharacterCard Component
const CharacterCard = ({ name, nickname, imgUrl, description }) => (
  <div className="card">
    <div className="card-titles">
      <h3>{name}</h3>
      {nickname && <h4>{nickname}</h4>}
    </div>
    <img src={imgUrl} alt={name} />
    <p>{description}</p>
  </div>
);

// App component data passed as props
const App = () => {
  const { characters, cards, links } = data;
  
  return (
    <>
      <Header links={links} />
      <CharacterRatings characters={characters} />
      <section id="character-cards">
        {cards.map((card, index) => (
          <CharacterCard key={index} {...card} />
        ))}
      </section>
    </>
  );
};

export default App;