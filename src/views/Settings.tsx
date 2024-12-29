import styled from "styled-components";
import Label from "../components/Label";
import { useState } from "react";
import InputField from "../components/Settings/InputField";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../utils";
import UserProfile from "../components/Settings/UserProfile";

type Option = "Edit Profile" | "Preferences" | "Security";

const Options = ["Edit Profile" , "Preferences" , "Security"] as Option[];

function Settings() {

  const [selected, setSelected] = useState<Option>('Edit Profile');
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

  return (
    <StyledSettings>
      <Container>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
          <div style={{width: '100%', height: '30px', display: 'flex', alignItems: 'end', borderBottom: '1px solid #F4F5F7', gap: '1rem'}}>
            {Options.map((option) => (<div onClick={() => setSelected(option)} key={option} style={{display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
              <Label weight={500} size={isTablet ? "1rem" : "0.8rem"} color={selected === option ? "#232323" : "#718EBF"} sx={{paddingBottom: '5px', margin: '0 10px'}}>{option}</Label>
              <div style={{width: '100%', height: '3px', backgroundColor: selected === option ? '#232323' : 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}} />
            </div>))}
          </div>
          {selected === 'Edit Profile' && <UserProfile/> }
          {selected === 'Preferences' && 
            <div style={{width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Label color="black" weight={500} size="20px">Preferences</Label>
            </div>
          }
          {selected === 'Security' && 
            <div style={{width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Label color="black" weight={500} size="20px">Security</Label>
            </div>
          }
        </div>
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

export default Settings;
