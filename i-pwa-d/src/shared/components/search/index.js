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

toggleFullscreen = nl => () => {
  let elem = document.querySelector("iframe");

  if (!document.fullscreenElement) {
    elem
    .requestFullscreen()
    .catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
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
          <MDBBtn color="primary" outline rounded size="md" className="ml-3" onClick={this.toggle(33)}>
            Close
          </MDBBtn>
          <MDBBtn color="primary" outline rounded size="md" className="ml-3" onClick={this.toggleFullscreen()}>
            FullScreen
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default IPFSearchIframe;