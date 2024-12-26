import React from 'react'
import RecentTransactions from '../components/Dashboard/RecentTransactions'
import WeeklyActivity from '../components/Dashboard/WeeklyActivity/WeeklyActivity'
import styled from 'styled-components'
import ExpenseStatistics from '../components/Dashboard/ExpenseStatistics/ExpenseStatistics'
import MyCards from '../components/Dashboard/MyCards'

function Dashboard() {
  return (
    <StyledDashboard>
      <div style={{width: '100%', display: 'flex', gap: '30px'}}>
        <MyCards/>
        <RecentTransactions/>
      </div>
      <div style={{width: '100%', display: 'flex', gap: '30px'}}>
        <WeeklyActivity/>
        <ExpenseStatistics/>
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