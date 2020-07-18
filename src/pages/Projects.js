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
                    <Project img="WTF-App.png" alt="profile" href="https://athomik79.github.io/WTF-app/" pname="First Project: WTF-App"></Project>
                </Col>
                <Col size="md-3">
                    <Project img="burger_header.png" alt="profile" href="https://afternoon-caverns-43648.herokuapp.com/" pname="Eat-Da-Burger App"></Project>
                </Col>
            </Row>
            <Row>
                <Col size="md-3"></Col>

                <Col size="md-3">
                    <Project img="trace-me.PNG" alt="profile" href="https://trace-me-app.herokuapp.com/main.html" pname="Trace Me"></Project>
                </Col>
                <Col size="md-3">
                    <Project img="emp-direct.PNG" alt="profile" href="https://quiet-journey-55809.herokuapp.com/" pname="Employee Directory"></Project>
                </Col>
            </Row>

        </Container>
    )
}

export default Projects;