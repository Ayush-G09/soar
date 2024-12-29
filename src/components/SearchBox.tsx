import styled from "styled-components";
import magnifyingGlass from "../assets/magnifying-glass.png";
import { breakpoints } from "../utils";

function SearchBox() {
  return (
    <StyledSearchBox>
      <StyledIconWrapper>
        <StyledIcon src={magnifyingGlass} />
      </StyledIconWrapper>
      <StyledInput type="text" placeholder="Search for something" />
    </StyledSearchBox>
  );
}

const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f5f7fa;
  height: 50px;
  border-radius: 40px;
  width: 255px;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    height: 40px;
  }
`;

const StyledIconWrapper = styled.div`
  width: 15%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const StyledInput = styled.input`
  width: 75%;
  height: 95%;
  border: none;
  outline: none;
  background-color: transparent;
`;

export default SearchBox;
