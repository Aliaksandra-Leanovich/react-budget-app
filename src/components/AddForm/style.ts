import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  gap: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0);

  border-radius: 10px;
  background: rgb(255, 255, 255);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #999999;
  }
`;
export { StyledForm, StyledInput };
