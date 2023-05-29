import React from "react";
import { Container } from "./styles";
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

interface INode {
  children: React.ReactNode;
}

const Layout: React.FC<INode> = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
