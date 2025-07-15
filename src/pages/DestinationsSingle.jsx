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

/**
 * Renders a single destination page with options to edit or delete the destination.
 * Utilizes data loaded by a loader function and navigation hooks.
 * 
 * Props:
 * - deleteDestination (function): A callback function to delete a destination by ID.
 * 
 * Uses:
 * - useNavigate from react-router-dom for navigation after deletion.
 * - useLoaderData from react-router-dom to load destination data.
 * - toast from react-toastify to display success messages.
 * 
 * Returns:
 * A JSX fragment containing:
 * - A heading displaying the destination title.
 * - An image of the destination.
 * - The destination description.
 * - Buttons for editing and deleting the destination.
 */

const DestinationsSingle = ({ deleteDestination }) => {
    const navigate = useNavigate();
    const destination = useLoaderData();

    /**
     * Handles the deletion of a destination.
     * 
     * Confirmation dialog is prompted to user.
     * If confirmed, deleteDestination is called with the destination ID as argument.
     * A success toast message is displayed after deletion is successful.
     * User is then redirected to the destinations list page.
     * @param {number} destinationId - The ID of the destination to be deleted.
     */
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

export default DestinationsSingle;
