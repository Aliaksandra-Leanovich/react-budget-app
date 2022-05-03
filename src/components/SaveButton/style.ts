import styled from "styled-components";

const StyledSaveButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  min-width: 85px;
  margin-right: 20px;
  padding-top: 6px;
  padding-bottom: 6px;

  text-align: center;

  border-radius: 10px;
  background-color: rgb(255, 255, 255);

  cursor: pointer;

  transition: box-shadow 0.4s, background-color 0.3s;

  &:hover {
    box-shadow: 2px 2px 15px rgba(33, 28, 28, 32%);
  }

  &:active {
    background-color: rgb(245 242 242);
  }
`;

export { StyledSaveButton };
