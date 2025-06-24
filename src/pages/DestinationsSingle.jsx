import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";
import CardImage from "../components/partials/CardImage";
import CtaButton from '../components/partials/CtaButton';

const DestinationsSingle = ({ deleteDestination }) => {
    const navigate = useNavigate();
    const destination = useLoaderData();

    const onDeleteClick = (destinationId) => {
        const confirm = window.confirm(
            "Are you sure you want to delete this destination?"
        );

        if (!confirm) return;

        deleteDestination(destinationId);

        toast.success("Destiantion deleted successfully");

        navigate("/destinations");
    };

    return (
        <>
            <Container containerWidth="lg">
                <Heading headingTag={1} headingLevel={1} modifierClass="center">
                    {destination.title}
                </Heading>

                <Row>
                    <Col
                        xs={12}
                        sm={4}
                        md={3}
                        lg={3}
                        xl={3}
                        margin={2}
                        marginLg={4}
                    >
                        <CardImage imgUrl={destination.imgUrl} altText={destination.imgAlt} />
                    </Col>

                    <Col
                        xs={12}
                        sm={8}
                        md={9}
                        lg={9}
                        xl={9}
                        margin={4}
                    >
                        <Content maxWidth="none" spacing="minimal">
                            {destination.description}
                        </Content>

                        <CtaButton to={`/destinations/edit/${destination.id}`} variant="success">
                            Edit Destination
                        </CtaButton>
                        
                        <CtaButton variant="danger" onClick={() => onDeleteClick(destination.id)}>
                            Delete Destination
                        </CtaButton>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

DestinationsSingle.propTypes = {
    deleteDestination: PropTypes.func.isRequired,
};

// const destinationsLoader = async ({ params }) => {
//     const res = await fetch(`/api/destinations/${params.id}`);
//     const data = await res.json();
//     return data;
// };

// export { DestinationsSingle as default, destinationsLoader };

export default DestinationsSingle;
