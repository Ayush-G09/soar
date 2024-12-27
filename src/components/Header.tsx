import styled from "styled-components";
import Label from "./Label";
import user from "../assets/user.svg";
import CircularBadge from "./CircularBadge";
import notification from "../assets/notification.png";
import setting from "../assets/settingsh.png";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <StyledHeader>
      <Label size="28px" weight={600} color="#343C6A">
        Overview
      </Label>
      <ActionBar>
        <SearchBox />
        <CircularBadge bg="#F5F7FA" img={setting} />
        <CircularBadge bg="#F5F7FA" img={notification} />
        <img src={user} style={{ width: "50px", height: "50px" }} />
      </ActionBar>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 10%;
  background-color: white;
  border-bottom: 1px solid #e6eff5;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export default Header;
