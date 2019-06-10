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

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle(36)}>iMemex</MDBBtn>
        <MDBModal modalStyle="info" size="fluid" isOpen={this.state.modal36} toggle={this.toggle(36)}>
          <MDBModalHeader>iMemex</MDBModalHeader>
          <MDBModalBody className="mb-0 p-0">
            <MDBIframe id="imemex" className={ styles.container } scrolling="auto" allowFullScreen title="Personal Distributed Web" src="https://service.edening.net/ipfs/QmcBE83uD1UJ8SzH9Fju5ghjjCkNdFAByW7xzbTAN2BQUr/" />
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn color="primary" outline rounded size="md" className="ml-3" onClick={this.toggle(36)}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }

}

export default Memex;