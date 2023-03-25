import React from "react";
import { Container } from "./Loader.style";

const Loader = () => {
 
  return (
    <Container>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default Loader;