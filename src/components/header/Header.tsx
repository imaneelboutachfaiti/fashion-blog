import "./Header.css";
export const Header = () => {
  return (
    <header className="header-section">
      <span className="logo">Fashion</span>
      <nav className="header-menu">
        <a className="menu-item">Home</a>
        <a className="menu-item">Recipes</a>
        <a className="menu-item">Article</a>
        <a className="menu-item">Contact</a>
        <a className="menu-item">Purchase</a>
      </nav>
    </header>
  );
};
