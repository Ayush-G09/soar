import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <StyledLayout>
        <Sidebar/>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
        <Header/>
        <Outlet/>
        </div>
    </StyledLayout>
  )
};

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #f5f7fa;
  display: flex;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export default Layout;