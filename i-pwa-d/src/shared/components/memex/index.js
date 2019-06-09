import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBIframe } from "mdbreact";
import styles from './index.module.css'

class Memex extends Component {

  state = {
    modal36: false,
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
  }

  toggleFullscreen = nl => () => {
    let elem = document.querySelector("#imemex");

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

  trails = (event) => {
    console.log('trails: ' + event);
    this.state.trails = event;
  }

  consult = () => {
    alert('Consulting iMemex for: ' + this.state.trails);
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle(36)}>iMemex</MDBBtn>
        <MDBModal modalStyle="info" size="lg" isOpen={this.state.modal36} toggle={this.toggle(36)}>
          <MDBModalHeader>iMemex</MDBModalHeader>
          <MDBModalBody className="mb-0 p-0">
            <MDBIframe id="imemex" className={ styles.container } scrolling="auto" allowFullScreen title="Personal Distributed Web" src="https://service.edening.net/ipfs/QmaUT7Sd4wykeL2KLdMixZ9WiMFEdRzZpmhVHWAfLadK2w/" />
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="primary" outline rounded size="md" className="ml-3" onClick={this.toggle(36)}>
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

export default Memex;