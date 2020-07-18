import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Card from "../components/Card";

function Main() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="lg-3">
              <h1>About Me</h1>
              <img src="profile.JPG" alt="pic of ali b jaber" style={{width:"150px", height:"250px"}}></img>
          </Col>  

          <Col size="lg-6">
            <Row>
            <Col size="sm-12">
            </Col>
            </Row>
            <Row>
            <Col size="sm-12">
            <p>
            Hello there. My name is Ali Jaber. I live in Alexandria, VA and have been live here all my life. 
            I am a hard worker and never give up on the job till im done. I enjoy imporving myself anytime i can in any way. 
            I enjoy learning new skills and is more of a hobby to me then requirment.
            </p>
            </Col>
            </Row>
          </Col>

          <Col size="lg-2">
              {/* <Card style={{width:"15rem;"}}> */}
                <div className="card-body">
                    <h5 className="card-title">Quick Info</h5>
                    <p className="card-text">Ali Jaber</p>
                    <p className="card-text">April 9, 1996</p>
                    <p className="card-text">Alexandria, VA</p>
                </div>
              {/* </Card> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
