import { StyledCard } from "./style";
import { ReactNode } from "react";

interface ICard {
  type: string;
  children: ReactNode;
  isEdit?: boolean;
}

const Card: React.FC<ICard> = ({ type, children }: ICard) => {
  return <StyledCard type={type}>{children}</StyledCard>;
};

export default Card;
