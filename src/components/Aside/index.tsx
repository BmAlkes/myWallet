import React, { useState } from "react";
import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  ThemeToggleFooter,
  Title,
  ToggleMenu,
} from "./styles";
import Toogle from "../Toogle";
import logo from "../../assets/assets/logo.svg";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdClose,
  MdDashboard,
  MdLogout,
  MdMenu,
} from "react-icons/md";
import { useAuth } from "../../context/auth";
import { useTheme } from "../../context/theme";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>

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
      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toogle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
