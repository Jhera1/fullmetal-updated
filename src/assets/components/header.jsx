import "./header.css";

// Functional Component using props
export const Header = ({ links }) => (
    <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {links.map((link, index) => <li key={index}>{link}</li>)}
      </nav>
    </header>
  );