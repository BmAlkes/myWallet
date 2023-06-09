import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 35px;
    margin-left: 5px;
  }
  > header h1 {
    font-size: 2rem;
  }
  > header p {
    font-size: 18px;
  }

  footer span {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    width: 100%;
    > header h1 {
      font-size: 24px;
      img {
        height: 24px;
        width: 24px;
      }
    }
    > footer span {
      font-size: 14px;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    height: auto;
  }
`;
