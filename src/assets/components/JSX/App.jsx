import React, { Component } from 'react';
import { Header } from "../header.jsx";
import { characterData } from '../data.jsx';
import { CharacterRow } from '../character-row.jsx';
import { CharacterRatings } from '../character-ratings.jsx';
import { CharacterCard } from '../character-cards.jsx';
import './reset.css';
import './style.css';

links = ["About Us", "Info", "Support Us"]

// App component data passed as props
const App = () => {
  const { characters, cards, links } = characterData;
  
  return (
    <>
      <Header links={links} />
      <CharacterRatings characters={characters} />
       <CharacterRow characters={characters} />
      <section id="character-cards">
        {cards.map((card, index) => (
          <CharacterCard key={index} {...card} />
        ))}
      </section>
    </>
  );
};

export default App;

