import "../CSS/character-cards.css";

// Abstracted CharacterCard Component
export const CharacterCard = ({ name, nickname, imageUrl, description }) => (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {nickname && <h4>{nickname}</h4>}
      </div>
      <img src={imageUrl} alt={name} />
      <p>{description}</p>
    </div>
  );