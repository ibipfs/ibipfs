import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";

const IPFSearchIframe = () => {
  return (
    <MDBContainer className="text-center">
      <MDBIframe src="https://ipfs-search.com" />
    </MDBContainer>
  );
}

export default IPFSearchIframe;