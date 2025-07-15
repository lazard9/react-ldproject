import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Container from "../grid/Container";
import Row from "../grid/Row";
import Col from "../grid/Col";

import siteLog from "../../assets/images/ldproject-logo-520-min.png";

import "./Navbar.scss";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);

        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkClass = ({ isActive }) => (isActive ? "current-nav-item" : "");

    return (
        <nav className={`navbar ${isOpen ? "toggled" : ""}`}>
            <Container containerWidth="lg" spacing="none">
                <Row>
                    <Col xs={6} sm={3} md={3} lg={3} xl={3}>
                        <div className="navbar--logo">
                            <NavLink to="/" className={linkClass}>
                                <img src={siteLog} alt="LDProjects site logo" />
                            </NavLink>
                        </div>
                    </Col>
                    <Col xs={6} sm={9} md={9} lg={9} xl={9}>
                        <div className="navbar--links">
                            <ul>
                                {isMobile ? (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={linkClass}
                                                onClick={toggleMenu}
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/destinations" end
                                                className={linkClass}
                                                onClick={toggleMenu}
                                            >
                                                Destinations
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/projects-one"
                                                className={linkClass}
                                                onClick={toggleMenu}
                                            >
                                                ProjecstOne
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/destinations" end
                                                className={linkClass}
                                            >
                                                Destinations
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/projects-one"
                                                className={linkClass}
                                            >
                                                ProjecstOne
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="navbar-toggle" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};

export default Navbar;
