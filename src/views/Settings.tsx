import styled from "styled-components";
import Label from "../components/Label";
import { useState } from "react";
import user from '../assets/user.svg';
import edit from '../assets/edit.png';
import { breakpoints } from "../utils";
import InputField from "../components/Settings/InputField";
import { useMediaQuery } from "react-responsive";

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
          {selected === 'Edit Profile' && 
          <>
            <Setting>
              <UserImgCon>
                <div style={{width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                  <img src={user} style={{width: '90px', height: '90px'}}/>
                  <img src={edit} style={{width: '30px', height: '30px', position: 'absolute', bottom: 0, right: 0, cursor: 'pointer'}} />
                </div>
              </UserImgCon>
              <Grid>
                <InputField title="Your Name" type="text" />
                <InputField title="Username" type="text" />
                <InputField title="Eamil" type="text" />
                <InputField title="Password" type="password" />
                <InputField title="Date of Birth" type="text" />
                <InputField title="Present Address" type="text" />
                <InputField title="Permanent Address" type="text" />
                <InputField title="City" type="text" />
                <InputField title="Postal Code" type="text" />
                <InputField title="Country" type="text" />
              </Grid>
            </Setting>
            <div style={{width: '190px', height: '50px', marginLeft: 'auto', marginTop: '40px', backgroundColor: '#232323', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Label weight={500} size="18px" color="white">Save</Label>
            </div>
          </>}
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

const Grid = styled.div`
width: 100%;
                  display: grid;
                  grid-template-columns: repeat(1, 1fr);
                  row-gap: 22px;
                  column-gap: 22px;
                  place-items: center;
                  @media (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
  }
`; 

const Setting = styled.div`
width: 100%;
gap: 2rem;
max-height: 88%;
display: flex;
flex-direction: column;
margin-top: 2rem;

@media (min-width: ${breakpoints.tablet}) {
      flex-direction: row;
  }
`;

const UserImgCon = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: ${breakpoints.tablet}) {
      width: 15%;
      align-items: start;
justify-content: start;
  }
`;

export default Settings;
