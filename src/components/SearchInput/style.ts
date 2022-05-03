import styled from "styled-components";

const StyledInput = styled.input`
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0);

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgb(153, 153, 153);
  }
`;
export { StyledInput };
