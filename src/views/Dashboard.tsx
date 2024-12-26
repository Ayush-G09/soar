import React from 'react'
import MyCards from '../components/Dashboard/MyCards/MyCards'
import RecentTransactions from '../components/Dashboard/RecentTransactions'
import WeeklyActivity from '../components/Dashboard/WeeklyActivity'
import styled from 'styled-components'

function Dashboard() {
  return (
    <StyledDashboard>
      <div style={{width: '100%', display: 'flex', gap: '30px'}}>
        <MyCards/>
        <RecentTransactions/>
      </div>
      <div style={{width: '100%', display: 'flex', gap: '30px'}}>
        <WeeklyActivity/>
      </div>
    </StyledDashboard>
  )
};

const StyledDashboard = styled.div`
width: 100%;
height: 100%;
padding: 30px;
gap: 30px;
display: flex;
flex-direction: column;
box-sizing: border-box;
overflow: hidden;
overflow-y: scroll;

&::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export default Dashboard