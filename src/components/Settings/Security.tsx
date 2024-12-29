import React from "react";
import Label from "../Label";
import styled from "styled-components";

function Security() {
  return (
    <SecurityContainer>
      <Label color="black" weight={500} size="20px">
        Security
      </Label>
    </SecurityContainer>
  );
};

const SecurityContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Security;
