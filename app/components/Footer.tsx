'use client';

type Page = 'home' | 'about' | 'services' | 'corporates' | 'academic' | 'donors' | 'government' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo"><a className="nav-logo" onClick={() => navigate('home')} role="button" tabIndex={0}>
        <img src="/oakvale-white.svg" className="h-[2rem] w-auto" alt="Oakvale Learning Logo" />
      </a></div>
          <p>Changing lives through learning and self-discovery. Evidence-based workforce, leadership and organisational development for Africa.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a onClick={() => onNavigate('corporates')}>For Corporates</a></li>
            <li><a onClick={() => onNavigate('academic')}>For Academic Institutions</a></li>
            <li><a onClick={() => onNavigate('donors')}>For Donor Agencies</a></li>
            <li><a onClick={() => onNavigate('government')}>For Government</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Organisation</h4>
          <ul>
            <li><a onClick={() => onNavigate('about')}>About Us</a></li>
            <li><a onClick={() => onNavigate('services')}>What We Do</a></li>
            <li><a onClick={() => onNavigate('contact')}>Work With Us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@oakvalelearning.com">hello@oakvalelearning.com</a></li>
            <li><a onClick={() => onNavigate('contact')}>Partnership Enquiries</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Oakvale Learning Ltd. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> &middot; <a href="#">Terms</a></span>
      </div>
    </footer>
  );
}
