import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { breakpoints } from "../utils";
import Notifications from "../components/Notifications";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (e: boolean) => {
    setIsSidebarOpen(e);
  };

  return (
    <StyledLayout>
      <Notifications />
      <Sidebar
        opened={isSidebarOpen}
        closeSidebar={(e: boolean) => toggleSidebar(e)}
      />
      <ContentArea>
        <Header openSidebar={(e: boolean) => toggleSidebar(e)} />
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentArea>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f5f7fa;
  display: flex;
  box-sizing: border-box;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const MainContent = styled.div`
  width: 100%;
  height: 80%;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    height: 90%;
  }
`;

export default Layout;
