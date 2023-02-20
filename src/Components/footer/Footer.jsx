import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <div className="ftbtm">
      <div>
        <h3>Real Pets</h3>
        <p>
          Animal welfare is not just about animals. It is about us. Our living
          conditions, our children, our earth. Cruelty to animals has a
          significant and irreversible impact on peaceful societies, human
          health, the economy, and the environment.
        </p>
      </div>
      <div>
        <h3>Qwick Link</h3>
        <Link to="/" className="li">Home</Link>
        <Link to="/pets" className="li">Pets</Link>
        <Link to="/ourworks" className="li">Our Works</Link>
        <Link to="/about" className="li">About</Link>
        <Link to="/contact" className="li">Contact</Link>
      </div>

      <div>
        <h3>Find Us.</h3>
        <p>HQ: People For Animals, 14 Ashoka Road, Jantar Mantar Road, New Delhi 110001. <br />
  +91 - 11 23719293/94 <br />
gandhim@nic.in</p>
      </div>
    </div>
  );
};

export default Footer;
