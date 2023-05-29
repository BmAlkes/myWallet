import React from "react";
import { Container } from "./styles";

interface INode {
  children: React.ReactNode;
}
const Content: React.FC<INode> = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default Content;
