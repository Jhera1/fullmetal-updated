import "./character-ratings.css"

// Class Component using props
export class CharacterRatings extends Component {
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