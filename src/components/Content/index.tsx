import React from "react";
import { Container } from "./styles";
import ContentHeader from "../ContentHeader";

const Content: React.FC = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default Content;
