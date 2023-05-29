import React, { useMemo, useState } from "react";
import { Container, Profile, UserName, Welcome } from "./styles";
import emojis from "../../utils/emojis";
import Toogle from "../Toogle";
import { useTheme } from "../../context/theme";

const MainHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container>
      <Toogle
        checked={darkTheme}
        labelLeft="Light"
        labelRight="Dark"
        onChange={handleChangeTheme}
      />
      <Profile>
        <Welcome>Hello, {emoji} </Welcome>
        <UserName>Bruno Malkes</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
