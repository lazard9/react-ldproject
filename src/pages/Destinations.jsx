import { useState, useEffect } from "react";
import SpinnerPuffLoader from "../components/partials/SpinnerPuffLoader";
import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";
import HeroSection from "../components/sections/HeroSection";
import heroBackgroundImage from "../assets/images/bacground-02.jpg";
import CtaInternalLink from "../components/partials/CtaInternalLink";

import DestinationCard from "../components/partials/DestinationCard";

const Destiantions = () => {
    const [destinationCards, setDestinationCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = "/api/destinations";

            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setDestinationCards(data);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <>
            <HeroSection heroBackgroundImage={heroBackgroundImage}>
                Destinations
            </HeroSection>

            <Container containerWidth="lg">
                <Heading modifierClass="center">
                    Discover & Add Your Favorite Destinations
                </Heading>

                <Content textAlignment="center" spacing="minimal">
                    <p>
                        Keep track of places you love or dream of visiting. 
                        This page lets you manage your favorite destinations - 
                        you can add, edit, or delete entries. 
                        It’s also a practical example of CRUD operations in React.
                    </p>

                    <CtaInternalLink link="/destinations/new">Add new destination</CtaInternalLink>
                </Content>
            </Container>

            <Container containerWidth="lg">
                <Heading modifierClass="center">
                    Overview of all destinations
                </Heading>

                <Content textAlignment="center" spacing="minimal">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry`&apos;`s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </Content>

                <Row>
                    {loading ? (
                        <SpinnerPuffLoader />
                    ) : (
                        destinationCards.map((destination) => (
                            <Col
                                xs={12}
                                sm={6}
                                md={6}
                                lg={4}
                                xl={4}
                                margin={3}
                                marginLg={4}
                                key={destination.id}
                            >
                                <DestinationCard
                                    destination={destination}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Destiantions;
