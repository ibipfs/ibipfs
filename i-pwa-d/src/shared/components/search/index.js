import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBIframe } from "mdbreact";
import styles from './index.module.css'

class IPFSearchIframe extends Component {
state = {
  modal11: false,
}

toggle = nr => () => {
  let modalNumber = "modal" + nr;
  this.setState({
    ...this.state,
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle(33)}>Search</MDBBtn>
      <MDBModal size="lg" isOpen={this.state.modal33} toggle={this.toggle(33)}>
        <MDBModalBody className="mb-0 p-0">
          <MDBIframe className={ styles.container } ratio="21by9" scrolling="auto" allowFullScreen title="The InterPlanetary Search" src="https://ipfs-search.com" />
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn color="primary" outline rounded size="md" className="ml-4" onClick={this.toggle(33)}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default IPFSearchIframe;