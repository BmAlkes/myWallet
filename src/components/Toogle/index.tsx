import React from "react";
import { Container, ToogleLabel, ToogleSelector } from "./styles";

interface IToogleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toogle: React.FC<IToogleProps> = ({
  checked,
  labelLeft,
  labelRight,
  onChange,
}) => (
  <Container>
    <ToogleLabel>{labelLeft}</ToogleLabel>
    <ToogleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <ToogleLabel>{labelRight}</ToogleLabel>
  </Container>
);

export default Toogle;
