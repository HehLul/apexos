import "./Footer.css";
import { Linkedin, Twitter, Mail } from "lucide-react";
import logoimg from "/apexxos_logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="header">
        <div className="logo">
          <img src={logoimg} alt="" width={48} />
          <h4>ApexxOS</h4>
        </div>
        <div className="socials">
          <Linkedin size={20} />
          <Twitter size={20} />
          <Mail size={20} />
        </div>
      </div>

      <div className="content">
        <div className="column">
          <h5>Product</h5>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#waitlist">Join Waitlist</a>
        </div>

        <div className="column">
          <h5>Company</h5>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="column">
          <h5>Resources</h5>
          <a href="#help-center">Help Center</a>
          <a href="#documentation">Documentation</a>
          <a href="#community">Community</a>
          <a href="#updates">Product Updates</a>
        </div>

        <div className="column">
          <h5>Legal</h5>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#security">Security</a>
        </div>
      </div>

      <div className="bottom">
        <p>&copy; ApexxOS 2025. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
