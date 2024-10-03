import "./character-cards.css";

// Abstracted CharacterCard Component
export const CharacterCard = ({ name, nickname, imgUrl, description }) => (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {nickname && <h4>{nickname}</h4>}
      </div>
      <img src={imgUrl} alt={name} />
      <p>{description}</p>
    </div>
  );