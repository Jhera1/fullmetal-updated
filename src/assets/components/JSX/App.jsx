import { Header } from "../header.jsx";
import { characterData } from '../data.jsx';
import { CharacterRow } from '../character-row.jsx';
import { CharacterRatings } from '../character-ratings.jsx';
import { CharacterCard } from '../character-cards.jsx';
import '../../CSS/reset.css';
import '../../CSS/style.css';

links = ["About Us", "Info", "Support Us"]

// App component data passed as props
const App = () => {
  const { characters, cards, } = characterData;
  
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

