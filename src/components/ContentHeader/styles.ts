import styled from "styled-components";

interface IContainer {
  lineColor: string;
}
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TitleContainer = styled.div<IContainer>`
  > h1 {
    color: ${(props) => props.theme.colors.white};
    font-size: 2rem;

    &::after {
      content: "";
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
`;
