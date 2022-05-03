import styled from "styled-components";

interface IProps {
  type: string;
}
const StyledCard = styled.div<IProps>`
  width: 100%;
  border-radius: 10px;
  padding-top: 36px;
  padding-bottom: 40px;
  padding-left: 20px;

  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  background-color: ${({ type }) =>
    type === "budget"
      ? "#7cc6fe"
      : type === "remaining"
      ? "#CCD5FF"
      : type === "spent"
      ? "#E7BBE3"
      : "#FF0000"};
`;
export { StyledCard };
