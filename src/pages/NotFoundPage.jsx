import Container from "../components/grid/Container";
import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";
import { Link } from "react-router-dom";

import "./NotFoundPage.scss"

const NotFoundPage = () => {
    return (
        <div className="nothing-found-404">
            <Container containerWidth="sm">
                    <Heading headingTag={1} headingLevel={1}>
                        Nothing to see here!
                    </Heading>
                    <Content maxWidth="none" spacing="none">
                        <p>
                            Please navikage back to the <Link to="/">home page</Link>.
                        </p>
                    </Content>
            </Container>
        </div>
    );
}

export default NotFoundPage;
