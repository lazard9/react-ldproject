
import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Container from "../components/grid/Container";
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";

import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";

import DestinationForm from "../components/partials/DestinationForm";

const DestinationsEdit = ({ updateDestination }) => {
    const destination = useLoaderData();
    const navigate = useNavigate();

    const handledDstinationSubmit = (destinationData) => {
        // console.log("Submitting destination:", destinationData);

        updateDestination(destinationData);

        toast.success('Destiantion Updated Successfully');

        return navigate(`/destinations/${destinationData.slug}`);
    };

    return (
        <>
            <Container containerWidth="sm">
                <Heading headingTag={1} headingLevel={1} modifierClass="center">
                    Update Destination: <br /> {destination.title}
                </Heading>

                <Content textAlignment="center" spacing="minimal">
                    <p>
                        Fill in the form bellow to update the destination.
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
                        <DestinationForm destinationSubmit={handledDstinationSubmit} initialDestinationData={destination} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

DestinationsEdit.propTypes = {
    updateDestination: PropTypes.func.isRequired,
};

export default DestinationsEdit;
