import styled from "styled-components";

const StyledCardInput = styled.input`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);

  width: 100%;
  margin-right: 20px;

  background-color: rgb(124, 198, 254);

  &::placeholder {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export { StyledCardInput };
