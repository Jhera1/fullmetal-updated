
// Functional Component for Table Row with conditional class rendering
export const CharacterRow = ({ char, index }) => (
    <tr className={index % 2 === 0 ? 'light' : 'dark'}>
      <td>{char.name}</td>
      <td>{char.skillset.join(', ')}</td>
      <td>{char.votes}</td>
    </tr>
  );