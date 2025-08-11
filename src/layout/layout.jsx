import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BackgroundContext } from "../context/BackgroundContext.jsx";

const Layout = () => {
  const { bg, theme, BoxClr } = useContext(BackgroundContext);
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // ← Manage collapse
  const [isUp, setIsUp] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    setExpanded(false);
    setIsUp(false);
  }, [location.pathname]);

  return (
    <div className="body" style={{ background: bg }}>
      <nav className="navBar-main" style={{ background: bg }}>
        <Navbar expand="lg" expanded={expanded}>
          <Container className="d-flex align-items-center justify-content-center">
            <Navbar.Brand className={`nav-link-${theme} `} as={NavLink} to="/">
              Umair Farooq
            </Navbar.Brand>
            {/* <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className=" ms-auto text-center">
                <Nav.Link
                  className={`nav-link-${theme}`}
                  as={NavLink}
                  to="/web"
                  onClick={() => setExpanded(false)} // ← Close on click
                >
                  Web Development
                </Nav.Link>
                <Nav.Link
                  className={`nav-link-${theme}`}
                  as={NavLink}
                  to="/net"
                  onClick={() => setExpanded(false)}
                >
                  Network Engineering
                </Nav.Link>
                <Nav.Link
                  className={`nav-link-${theme}`}
                  as={NavLink}
                  to="/cyber"
                  onClick={() => setExpanded(false)}
                >
                  Cybersecurity Analyst
                </Nav.Link>
              </Nav>
            </Navbar.Collapse> */}
          </Container>
        </Navbar>
      </nav>
      <div
        className="nav-box  text-center align-items-center d-flex justify-content-center"
        style={{ top: isUp ? "0%" : "-30%", backgroundColor: BoxClr }}
      >
        <div className="d-flex nav-box-item flex-md-row flex-column gap-md-3 gap-2 justify-content-center  align-items-center">
          <Nav.Link
            className={`nav-link-${theme}`}
            as={NavLink}
            to="/web"
             style={{ color: "white" }}
            onClick={() => setExpanded(false)} // ← Close on click
          >
            Web Development
          </Nav.Link>
          <Nav.Link
            className={`nav-link-${theme}`}
            as={NavLink}
            to="/net"
            onClick={() => setExpanded(false)}
          >
            Network Engineering
          </Nav.Link>
          <Nav.Link
            className={`nav-link-${theme}`}
            as={NavLink}
            to="/cyber"
            onClick={() => setExpanded(false)}
          >
            Cybersecurity Analyst
          </Nav.Link>
        </div>
        <div className="nav-box-box">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setIsUp((prev) => !prev)}
          ></div>
        </div>
      </div>

      <div className="mainWrap">
        <Outlet />
      </div>

      <footer className="text-center footer pt-4">
        <div className="container p-4 pb-0">
          <section className="mb-4 social-links">
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/umair-farooq-6ab9b2201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/umair9211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#D44638" }}
              href="mailto:umairwork9211@gmail.com"
              target="_blank"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Umair Farooq. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
