import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";

function Projects() {
    return (
        <Container style={{ marginTop: 30 }}>
            <Row>
                <h1>My Portfolio</h1>
            </Row>
            <Row>
                <Col size="md-3"></Col>

                <Col size="md-3">
                    <Project img="" alt="profile" href="https://athomik79.github.io/WTF-app/" pname="First Project: WTF-App"></Project>
                </Col>
                <Col size="md-3">
                    <Project img="" alt="profile" href="https://afternoon-caverns-43648.herokuapp.com/" pname="Eat-Da-Burger App"></Project>
                </Col>
            </Row>
            <Row>
                <Col size="md-3"></Col>

                <Col size="md-3">
                    <Project img="" alt="profile" href="https://trace-me-app.herokuapp.com/main.html" pname="Trace Me"></Project>
                </Col>
                <Col size="md-3">
                    <Project img="" alt="profile" href="https://afternoon-caverns-43648.herokuapp.com/" pname="Eat-Da-Burger App"></Project>
                </Col>
            </Row>

        </Container>
    )
}

export default Projects;