import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCard, MDBCardBody, MDBModalHeader, MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBModal, MDBModalBody, MDBModalFooter, MDBIframe } from "mdbreact";
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
        <MDBModal modalStyle="info" size="fluid" isOpen={this.state.modal36} toggle={this.toggle(36)}>
          <MDBModalHeader>iMemex</MDBModalHeader>
          <MDBModalBody id="imemex" className="mb-0 p-0">
            <MDBCard>
              <MDBCardBody>
                <MDBContainer id="consultBox">
                  <MDBRow>
                    <MDBCol md="9">
                      <MDBInput hint="<trail(s)@iMemex> e.g. memex ipfs ibipfs"  getValue={ this.trails } />
                    </MDBCol>
                    <MDBCol md="3">
                      <MDBBtn onClick={ this.consult }>Consult</MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBContainer id="advicesBox">
                  <MDBListGroup>
                    <MDBListGroupItem>Memex: Enlarged intimate supplement to our memory...</MDBListGroupItem>
                    <MDBListGroupItem>IPFS: InterPlanetary File System...</MDBListGroupItem>
                    <MDBListGroupItem>iMemex: Personal Memex Distributed...</MDBListGroupItem>
                    <MDBListGroupItem>IBIPFS: In-browser IPFS...</MDBListGroupItem>
                    <MDBListGroupItem>Trail(s): Index(es) of our human mind...</MDBListGroupItem>
                    <MDBListGroupItem>Distributed: Nowhere but Everywhere...</MDBListGroupItem>
                  </MDBListGroup>
                </MDBContainer>
                <hr />
                <MDBContainer id="statsBox">
                  <MDBIframe className={ styles.container } id="istats" ratio="21by9" scrolling="auto" allowFullScreen title="IPFS Node Stats" src="/stats" />
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
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