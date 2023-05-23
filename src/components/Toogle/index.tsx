import React from "react";
import { Container, ToogleLabel, ToogleSelector } from "./styles";

const Toogle: React.FC = () => (
  <Container>
    <ToogleLabel>White</ToogleLabel>
    <ToogleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => {
        console.log("Toogle");
      }}
    />
    <ToogleLabel>Dark</ToogleLabel>
  </Container>
);

export default Toogle;
