import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <StyledLayout>
      <Sidebar />
      <ContentArea>
        <Header />
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
  height: 90%;
  box-sizing: border-box;
`;

export default Layout;
