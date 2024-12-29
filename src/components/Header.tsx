import styled from "styled-components";
import Label from "./Label";
import CircularBadge from "./CircularBadge";
import notification from "../assets/notification.png";
import setting from "../assets/settingsh.png";
import SearchBox from "./SearchBox";
import menu from "../assets/menu.png";
import { breakpoints, convertPathToTitle } from "../utils";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type Props = {
  openSidebar: (e: boolean) => void;
};

function Header({ openSidebar }: Props) {
  const location = useLocation();
  const title = convertPathToTitle(location.pathname);
  const { userData } = useSelector((state: RootState) => state.userProfile);

  return (
    <StyledHeader>
      <HeaderContent>
        <Menu src={menu} onClick={() => openSidebar(true)} />
        <Label size="28px" weight={600} color="#343C6A">
          {title}
        </Label>
        <ActionBar>
          <SearchBox />
          <CircularBadge bg="#F5F7FA" img={setting} />
          <CircularBadge bg="#F5F7FA" img={notification} />
        </ActionBar>
        <UserImage alt="user" src={userData.img} />
      </HeaderContent>
      <SecondarySearchbox>
        <SearchBox />
      </SecondarySearchbox>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  height: 20%;
  background-color: white;
  border-bottom: 1px solid #e6eff5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    height: 10%;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ActionBar = styled.div`
  display: none;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: 1.5rem;

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

const SecondarySearchbox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Menu = styled.img`
  display: flex;
  width: 25px;
  height: 25px;
  margin-right: 0px;

  @media (min-width: ${breakpoints.tablet}) {
    margin-right: 1.5rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Header;
