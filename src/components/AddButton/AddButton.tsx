import { ReactNode } from "react";
import { StyledButton } from "./style";

interface IButton {
  children: ReactNode;
}

const AddButton: React.FC<IButton> = ({ children }: IButton) => {
  return <StyledButton type="submit">{children}</StyledButton>;
};
export default AddButton;
