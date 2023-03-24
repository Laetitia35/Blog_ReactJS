import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
    
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }


    }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <li>
              <Link to="/" className="items">Accueil</Link>
          </li>
          <li>
              <Link to="/ecrire" className= "items" >Ecrire</Link>
          </li>
          <li>
              <Link to="/contact" className="items">Contact</Link>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  );
}
