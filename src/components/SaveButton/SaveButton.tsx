import { ReactNode } from "react";
import { StyledSaveButton } from "./style";

interface ISave {
  children: ReactNode;
  handleSaveButton: () => void;
}

const SaveButton = ({ children, handleSaveButton }: ISave) => {
  return (
    <StyledSaveButton onClick={handleSaveButton}>{children}</StyledSaveButton>
  );
};

export default SaveButton;
