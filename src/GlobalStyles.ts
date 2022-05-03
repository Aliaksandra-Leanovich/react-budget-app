import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input, select{
  border: none;
  &:focus{
    outline: none;
  }
}

button {
  border: 0;
  background: none;
  outline: none;
  cursor: pointer;
}

body{
  font-family: 'Inter', sans-serif;
  padding: 40px 0;
}
`;
