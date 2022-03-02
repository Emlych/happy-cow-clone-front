import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>DMCA Compliance</li>
          <li>Support HappyCow</li>
        </ul>
      </nav>
      <div>
        Website cloned by
        <a
          href="https://github.com/Emlych"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emily Le Deunf
        </a>
      </div>
    </div>
  );
};

export default Footer;
