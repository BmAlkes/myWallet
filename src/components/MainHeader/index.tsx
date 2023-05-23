import React, { useMemo } from "react";
import { Container, Profile, UserName, Welcome } from "./styles";
import emojis from "../../utils/emojis";
import Toogle from "../Toogle";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);

    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toogle />
      <Profile>
        <Welcome>Hello, {emoji} </Welcome>
        <UserName>Bruno Malkes</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
