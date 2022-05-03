import { ChangeEvent } from "react";
import { StyledInput } from "./style";

interface IInput {
  searchValue: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ searchValue, handleSearch }: IInput) => {
  return (
    <StyledInput
      placeholder="search..."
      value={searchValue}
      onChange={handleSearch}
    ></StyledInput>
  );
};

export default SearchInput;
