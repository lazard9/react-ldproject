import Container from "../components/grid/Container";
import Row from "../components/grid/Row";

import HeroSection from "../components/sections/HeroSection";
import Heading from "../components/partials/Heading";
import Content from "../components/partials/Content";

import TaskListHolder from "../components/projects-one/task-list/TaskListWrapper";
import FilterProductsWrapper from "../components/projects-one/filter-product-list/FilterProductsWrapper";
import ProductWithOptions from "../components/projects-one/product-options/ProductWithOptions";
import ProductWithOptionsUrlState from "../components/projects-one/product-options/ProductWithOptionsUrlState";
import GuessColorGame from "../components/projects-one/guess-color-game/GuessColorGame";

import heroBackgroundImage from "../assets/images/bacground-05.jpg";

const ProjectsOne = () => {
    return (
        <>
            <HeroSection heroBackgroundImage={heroBackgroundImage}>
                ProjectsOne Page
            </HeroSection>

            <Container containerWidth="lg">
                <Heading modifierClass="center">Description</Heading>
                <Content textAlignment="center" spacing="none">
                    <p>
                        These projects are inspired by tasks and solutions found
                        on the Web Dev Simplified, ByteGrad and Web Dev Cody
                        channels
                    </p>
                </Content>
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>Task List</Heading>

                <Content maxWidth="none">
                    <p>
                        The task list is largely based on the Web Dev Simplified
                        Todo list project. Added a warning if the input field
                        for tasks is empty. If the task has already been added,
                        a warning will appear. Also, the first letter will be
                        capitalized.
                    </p>
                </Content>

                <TaskListHolder />
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>URL search parameters</Heading>

                <Content maxWidth="none">
                    <p>
                        In this section we have a list of products that can be
                        filtered. The first approach is classic and we use
                        `useState`. The second is without `useState`, but
                        `useSearchParams`, which allows us to place the state in
                        the URL. The benefits of this approach are manifold.
                        Besides going back to the old days in web development,
                        the URL can be copied and shared, and put in personal
                        bookmarks etc.
                    </p>
                    <p>
                        There are buttons available to reset both games and
                        clear the URL.
                    </p>
                </Content>

                <Row>
                    <FilterProductsWrapper />
                </Row>
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>Product With Options</Heading>

                <Content maxWidth="none">
                    <p>Choose from several product options.</p>
                    <p>
                        Similar to the previous project, `useSearchParams` is
                        used to set the state in the URL. The first example
                        utilizes `useState` and `useEffect` to track changes and
                        update query parameters. However, I would not use this
                        solution in production because we need to decide between
                        using `useState` and `useSearchParams`, since now we
                        have two sources of truth. Using both is redundant and
                        need to be sinchronized.
                    </p>
                    <p>
                        The second solution uses exclusively `useSearchParams`.
                    </p>
                    <p>
                        It is important to note that the parameters in the URL
                        will not be set before interacting with the buttons, as
                        well as that there are buttons that can be used to clear
                        the parameters from the URL, for easier interaction with
                        different tasks and solutions independently of each
                        other.
                    </p>
                </Content>

                <Row margin={4} marginLg={6}>
                    <ProductWithOptions />
                </Row>
                <Row>
                    <ProductWithOptionsUrlState />
                </Row>
            </Container>

            <Container containerWidth="sm">
                <Heading level={2}>Guess Color Game</Heading>

                <Content maxWidth="none">
                    <p>
                        Attempt to guess the color. Once correctly guessed, it
                        will take a few seconds for the game to reset the colors
                        both in the field and on the buttons.
                    </p>
                    <p>
                        Although I have initially created a solution with
                        `useEffect`, which is commented out in the code, I
                        ultimately opted to utilize only `useState`.
                    </p>
                </Content>

                <GuessColorGame />
            </Container>
        </>
    );
};

export default ProjectsOne;
