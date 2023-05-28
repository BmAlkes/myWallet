import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main``;
export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;
    opacity: 0.4;
    &:hover {
      opacity: 0.7;
    }
  }
  .tag-filter-reccurent::after {
    content: "";
    display: block;
    margin: 10px auto;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
  .tag-filter-eventual::after {
    content: "";
    display: block;
    margin: 10px auto;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
  }
  .tag-actived {
    opacity: 1;
  }
`;
