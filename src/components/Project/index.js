import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Project(props) {
    return (
        <div>
                <Col size="md-3">
                <img id="img" src={props.img} alt={props.alt}></img>
                <Row>
                    <Col size="sm-12">
                    <a href={props.href}>{props.pname}</a>
                    </Col>
                </Row>
                </Col>
        </div>
    )
}

export default Project;


