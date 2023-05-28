import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.color};
  width: 32%;
  height: 150px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.white};
  padding: 10px 20px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
    opacity: 0.4;
  }
  > span {
    font-size: 16px;
  }
  > small {
    font-size: 14px;
    position: absolute;
    bottom: 10px;
  }
  > h1 {
    font-size: 3rem;
  }
`;
