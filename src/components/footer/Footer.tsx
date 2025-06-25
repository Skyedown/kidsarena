import './Footer.less';

type FooterProps = {
  onPolicyShow: () => void;
};

const Footer = ({ onPolicyShow }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>&copy; {new Date().getFullYear()} Kids Arena</span>
        <span>
          Vytvoril{' '}
          <a
            href="https://www.linkedin.com/in/peterlehocky"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peter Lehocký
          </a>
        </span>
        <span onClick={onPolicyShow} className="cookie-policy-link">
          Používanie osobných údajov
        </span>
      </div>
    </footer>
  );
};

export default Footer;
