import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding-left: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 70px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

export const LogoImg = styled.img`
  height: 40px;
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
