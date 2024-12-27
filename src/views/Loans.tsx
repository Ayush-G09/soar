import styled from "styled-components";
import Label from "../components/Label";

function Loans() {
  return (
    <StyledContainer>
      <Label weight={500} sx={{fontSize: '30px'}} color="#232323">
        Loans
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

export default Loans;
