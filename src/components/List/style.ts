import styled from "styled-components";

const StyledList = styled.ul`
  min-height: 200px;
  overflow: auto;
  list-style-type: none;
`;

const StyledEmpty = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgb(0, 0, 0);

  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
`;

export { StyledList, StyledEmpty };
