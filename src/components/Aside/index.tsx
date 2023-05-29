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
import { useAuth } from "../../context/auth";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="" />
        <Title>My Wallet</Title>
      </Header>
      <MenuContainer>
        <a href="/">
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
        <button onClick={signOut}>
          <MdLogout />
          Logout
        </button>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
