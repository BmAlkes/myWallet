import React, { useState } from "react";

import logoImg from "../../assets/lobo.png";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../context/auth";

import { Container, Logo, Form, FormTitle } from "./styles";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h2>My Wallet</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Enter</FormTitle>

        <Input
          type="email"
          placeholder="e-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Acess</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
