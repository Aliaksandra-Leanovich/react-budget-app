import { ChangeEvent } from "react";
import { StyledCardInput } from "./style";

interface IInput {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CardInput = ({ handleInput }: IInput) => {
  return (
    <StyledCardInput
      onChange={handleInput}
      placeholder="Enter  budget ..."
      type="number"
    ></StyledCardInput>
  );
};

export default CardInput;
