import { StyledTitle } from "./style";
import { ReactNode } from "react";

interface ITitle {
  children: ReactNode;
}

const Title: React.FC<ITitle> = ({ children }: ITitle) => {
  return <StyledTitle> {children} </StyledTitle>;
};

export default Title;
