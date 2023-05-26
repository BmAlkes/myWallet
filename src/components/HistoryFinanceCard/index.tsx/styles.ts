import styled from "styled-components";

interface IContainerProps {
  color: string;
}

interface ITagProps {
  color: string;
}

export const Container = styled.li<IContainerProps>`
  background-color: ${(props) => props.color};
  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  font-weight: 400;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;
export const Tag = styled.div<ITagProps>``;
