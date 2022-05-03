import { StyledClose } from "./style";

import close from "../../assets/icons/close.svg";

interface IClose {
  onClick: () => void;
}

const Close = ({ onClick }: IClose) => {
  return <StyledClose src={close} onClick={onClick} alt="close button" />;
};

export default Close;
