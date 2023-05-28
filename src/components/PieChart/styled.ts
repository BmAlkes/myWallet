import styled from "styled-components";

interface ILegendProps {
  backgroundColor: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  border-radius: 7px;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

export const LegendeContainer = styled.ul`
  list-style: none;
  height: 180px;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  > div {
    background-color: ${(props) => props.backgroundColor};
    width: 45px;
    height: 40px;
    border-radius: 5px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
    font-size: 1.4rem;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
`;
