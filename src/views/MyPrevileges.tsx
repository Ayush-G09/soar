import styled from "styled-components";
import Label from "../components/Label";

function MyPrevileges() {
  return (
    <StyledContainer>
      <Label weight={500} size="30px" color="#232323">
        MyPrevileges
      </Label>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MyPrevileges;
