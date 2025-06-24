import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";

import DestinationForm from "../components/partials/DestinationForm";

const DestinationsNew = ({ newDestination }) => {
    const navigate = useNavigate();

    const handledDstinationSubmit = (destinationData) => {
        // console.log("Submitting destination:", destinationData);

        newDestination(destinationData);

        toast.success('Destiantion Added Successfully');

        return navigate("/destinations");
    };

    return (
        <>
            <Container containerWidth="sm">
                <Heading headingTag={1} headingLevel={1} modifierClass="center">
                    Create New Destination
                </Heading>

                <Content textAlignment="center" spacing="minimal">
                    <p>
                        Fill in the form bellow to create a new destination.
                    </p>
                    <p>
                        All fields are required!
                    </p>
                </Content>

                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        margin={4}
                    >
                        <DestinationForm destinationSubmit={handledDstinationSubmit} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

DestinationsNew.propTypes = {
    newDestination: PropTypes.func.isRequired,
};

export default DestinationsNew
