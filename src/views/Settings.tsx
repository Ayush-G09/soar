import styled from "styled-components";
import Label from "../components/Label";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../utils";
import UserProfile from "../components/Settings/UserProfile";
import Preferences from "../components/Settings/Preferences";
import Security from "../components/Settings/Security";

type Option = "Edit Profile" | "Preferences" | "Security";

const Options = ["Edit Profile", "Preferences", "Security"] as Option[];

function Settings() {
  const [selected, setSelected] = useState<Option>("Edit Profile");
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

  return (
    <StyledSettings>
      <Container>
        <OptionsWrapper>
          {Options.map((option) => (
            <OptionItem key={option} onClick={() => setSelected(option)}>
              <Label
                weight={500}
                size={isTablet ? "1rem" : "0.8rem"}
                color={selected === option ? "#232323" : "#718EBF"}
                sx={{ paddingBottom: "5px", margin: "0 10px" }}
              >
                {option}
              </Label>
              <OptionIndicator $isSelected={selected === option} />
            </OptionItem>
          ))}
        </OptionsWrapper>
        {selected === "Edit Profile" && <UserProfile />}
        {selected === "Preferences" && <Preferences />}
        {selected === "Security" && <Security />}
      </Container>
    </StyledSettings>
  );
}

const StyledSettings = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 30px;
  }
`;

const OptionsWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #f4f5f7;
  gap: 1rem;
`;

const OptionItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const OptionIndicator = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  height: 3px;
  background-color: ${(props) => (props.$isSelected ? "#232323" : "white")};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export default Settings;
