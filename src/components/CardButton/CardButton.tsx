import { StyledButton } from "./style";
import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  handleEditButton: () => void;
}

const CardButton: React.FC<IButton> = ({ children, handleEditButton }) => {
  return <StyledButton onClick={handleEditButton}>{children}</StyledButton>;
};

export default CardButton;
