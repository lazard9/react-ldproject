import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Container from "../grid/Container";
import Row from "../grid/Row";
import Col from "../grid/Col";
import Heading from "../partials/Heading";

import "./Footer.scss";

const Footer = () => {
    const linkClass = ({ isActive }) => (isActive ? "current-nav-item" : "");

    return (
        <footer className="footer">
            <Container containerWidth="lg">
                <Row>
                    <Col sm={6} md={6} lg={3} xl={3} margin={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Work Showcase
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <NavLink to="/destinations" className={linkClass}>Destinations</NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to="/projects-one" className={linkClass}>ProjecstOne</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3} margin={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            About
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <NavLink to="/about" className={linkClass}>Who Am I</NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to="/blog" className={linkClass}>Blog</NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to="/contact"  className={linkClass}>Contact</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3} margin={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Services
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <NavLink to="/">Marketing</NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to="/">Consulting</NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to="/">Development</NavLink>
                            </li>
                            <li className="footer__list-item">
                                <NavLink to="/">Design</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3} margin={3}>
                        <Heading headingTag={5} headingLevel={4}>
                            Social
                        </Heading>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <a href="https://www.facebook.com" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    Facebook
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="https://www.instagram.com" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    Instagram
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="https://www.linkedin.com" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
