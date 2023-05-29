import styled, { css } from "styled-components";

interface IConteinerProps {
  menuIsOpen: boolean;
}

interface IThemeToggleFooterProps {
  menuIsOpen: boolean;
}
export const Container = styled.div<IConteinerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  position: relative;

  @media (max-width: 600px) {
    padding-left: 7px;
    position: fixed;
    z-index: 10;
    width: 200px;
    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    overflow: hidden;
    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 70px;
  @media (max-width: 600px) {
    width: 200px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 40px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const MenuContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  a {
    margin-top: 50px;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.3rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
  button {
    background: none;
    margin-top: 50px;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.3rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 5px;
  font-size: 22px;

  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media (max-width: 470px) {
    display: ${(props) => (props.menuIsOpen ? "flex" : "none")};
  }
`;
