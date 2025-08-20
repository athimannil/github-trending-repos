import Container from "../Container/Container";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container" size="xl">
        <p>
          Made with ❤️ by{" "}
          <a
            className="footer__link"
            href="https://www.athimannil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Athimannil
          </a>
        </p>
        <span className="footer__copyright">
          &copy; {new Date().getFullYear()} Repo List &mdash; All rights
          reserved.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
