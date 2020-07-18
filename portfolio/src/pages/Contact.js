import React from "react";
import Container from "../components/Container";


function Contact() {
    return (
        <div>
            <Container style={{ marginTop: 30}}>
            <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputFisrtName">First Name</label>
                <input type="text" className="form-control" id="inputFirstName" placeholder="John"></input>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputLastName">Last Name</label>
                <input type="text" className="form-control" id="inputLastName" placeholder="Doe"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmailAddress">E-mail Address</label>
              <input type="email" className="form-control" id="inputEmailAddress" placeholder="example@example.com"></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputPhoneNumber">Phone Number</label>
              <input type="number" className="form-control" id="inputPhoneNumber" placeholder="703-123-4567"></input>
            </div>
              <div className="form-group">
                <label htmlFor="colFormLabelLg">Reason htmlFor Contact</label>  
                <textarea className="form-control" aria-label="With textarea" placeholder="Reason i'm contacting you for is..........."></textarea>
              </div>
              <button id="btn" className="btn btn-primary" type="submit">Submit form</button>
          </form>
            </Container>
        </div>
    )
}

export default Contact;