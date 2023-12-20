import React from "react";
import Container from "../container";
import { NavbarData } from "../../../data/data";
import { Link } from "react-router-dom";
import "./navbar.css"
export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <Container>
          <div className="navbar__box">
            <div className="navbar__logo"></div>
            <div className="navbar__list">
              <div className="navbar__ul">
                {NavbarData.map((item, index) => {
                  return (
                    <Link to={item.link}>
                      <li className="navbar__li" key={index}>
                        {item.name}
                      </li>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
}
