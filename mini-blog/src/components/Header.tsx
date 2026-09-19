import withLogger from "../hocs/withLogger";
import "../styles/Header.css";

// eslint-disable-next-line react-refresh/only-export-components
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Dev Insights</h1>
      <nav>
        <a href="#" className="header__link">New Post</a>
      </nav>
    </header>
  );
};

export default withLogger(Header);