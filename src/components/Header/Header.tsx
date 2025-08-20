import { BsGithub } from "react-icons/bs";
import Container from "../Container/Container";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Container className="header__container" size="xl">
        <BsGithub className="header__icon" size={36} />
        <div className="header__titles">
          <h1 className="header__title">GitHub Trending</h1>
          <p className="header__subtitle">
            Discover the most popular repositories from the last week
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
