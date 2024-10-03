import React, { Component } from 'react';
import { Header } from "./header.jsx";
import { data } from './data.jsx'
import { CharacterRow } from '../components/character-row.jsx';
import { CharacterRatings } from '../components/character-ratings.jsx';
import { CharacterCard } from '../components/character-cards.jsx';
import './reset.css';
import './style.css';

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