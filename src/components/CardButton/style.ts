import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 85px;
  margin-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  cursor: pointer;

  &:hover {
    background-color: #999999;
  }
`;
export { StyledButton };
