import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import HeroSection from "../components/sections/HeroSection";
import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";

import Slider from "../components/partials/Slider";
import ParalaxSection from "../components/sections/ParalaxSection";
import PortraitCard from "../components/partials/PortraitCard";
import ProductCard from "../components/partials/ProductCard";
import LandscapeCard from "../components/partials/LandscapeCard";

import heroBackgroundImage from "../assets/images/bacground-01.jpg";
import paralaxBackgroundImage from "../assets/images/aurora-background.png";

import portraitCardsData from "../assets/data/portrait-cards.json";
import productCardsData from "../assets/data/product-cards.json";
import landscapeCardsData from "../assets/data/landscape-cards.json";

/**
 * The Home component renders the homepage of the application, showcasing
 * various UI components like HeroSection, Slider, and different types of
 * cards (Landscape, Portrait, Product) using a custom grid system.
 *
 * Includes:
 * - A HeroSection with a background image and title.
 * - A project overview section explaining the purpose of the page.
 * - A Slider component for displaying various items.
 * - A grid display of landscape cards, portrait cards, and product cards,
 *   each mapped from corresponding data sources.
 * - A ParalaxSection for visual effect.
 *
 * This component focuses on static components and layout demonstration,
 * without reliance on CSS frameworks.
 */

const Home = () => {
  return (
    <>
      <HeroSection heroBackgroundImage={heroBackgroundImage}>
        LD React Projects
      </HeroSection>

      <Container containerWidth="lg">
        <Heading modifierClass="center">Project Overview</Heading>
        <Content textAlignment="center" spacing="none">
          <p>
            This project is a practice exercise showcasing mostly static
            components from my previous work. Instead of relying on CSS
            frameworks, I built a simple custom grid system just for fun.
            Styling and complex layouts aren’t the main focus here.
          </p>
          <p>
            Use the menu to explore different pages, each containing more
            interactive and complex components inspired by online tutorials.
          </p>
        </Content>
      </Container>

      <Container spacing="none">
        <Slider />
      </Container>

      <Container containerWidth="lg">
        <Heading>Landscape Cards</Heading>

        <Row>
          {landscapeCardsData.length > 0 ? (
            landscapeCardsData.map((cardData) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                margin={3}
                marginLg={4}
                key={cardData.id}
              >
                <LandscapeCard
                  cardBackgroundImage={cardData.imgUrl}
                  title={cardData.title}
                  description={cardData.description}
                  ctaLink={cardData.ctaLink}
                  ctaText={cardData.ctaText}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p>No destination found.</p>
            </Col>
          )}
        </Row>
      </Container>

      <Container containerWidth="lg">
        <Heading modifierClass="center">Portrait cards</Heading>

        <Content textAlignment="center">
          <p>
            Aliquam in bibendum mauris. Sed vitae erat vel velit blandit
            pharetra vitae nec ante. Cras at est augue cras ut interdum elit.
          </p>
        </Content>

        <Row>
          {portraitCardsData.length > 0 ? (
            portraitCardsData.map((cardData) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                margin={3}
                marginLg={4}
                key={cardData.id}
              >
                <PortraitCard
                  imgUrl={cardData.imgUrl}
                  imgAlt={cardData.imgAlt}
                  title={cardData.title}
                  description={cardData.description}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p>No portrait found.</p>
            </Col>
          )}
        </Row>
      </Container>

      <ParalaxSection paralaxBackgroundImage={paralaxBackgroundImage}>
        Paralax title
      </ParalaxSection>

      <Container containerWidth="lg">
        <Heading>Product cards</Heading>

        <Row>
          {productCardsData.length > 0 ? (
            productCardsData.map((cardData) => (
              <Col
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                margin={3}
                marginLg={4}
                key={cardData.id}
              >
                <ProductCard
                  imgUrl={cardData.imgUrl}
                  imgAlt={cardData.imgAlt}
                  title={cardData.title}
                  description={cardData.description}
                  ctaLink={cardData.ctaLink}
                  ctaText={cardData.ctaText}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p>No products found.</p>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;
