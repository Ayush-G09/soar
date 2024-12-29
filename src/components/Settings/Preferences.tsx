import React from "react";
import Label from "../Label";
import styled from "styled-components";

function Preferences() {
  return (
    <PreferencesContainer>
      <Label color="black" weight={500} size="20px">
        Preferences
      </Label>
    </PreferencesContainer>
  );
};

const PreferencesContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Preferences;
