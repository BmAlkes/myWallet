import React from "react";
import { Container, Header, LogoImg, MenuContainer, Title } from "./styles";
import logo from "../../assets/assets/logo.svg";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdLogout,
  MdOutlet,
} from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="" />
        <Title>My Wallet</Title>
      </Header>
      <MenuContainer>
        <a href="/dashboard">
          <MdDashboard /> Dashboard
        </a>
        <a href="/list/entry-balance">
          <MdArrowUpward />
          Income
        </a>
        <a href="/list/exit-balance">
          <MdArrowDownward />
          Outcome
        </a>
        <a href="">
          <MdLogout />
          Logout
        </a>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
