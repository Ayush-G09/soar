import styled from "styled-components";
import Label from "../components/Label";

function Accounts() {
  return (
    <StyledContainer>
      <Label weight={500} size="30px" color="#232323">
        Accounts
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

export default Accounts;
