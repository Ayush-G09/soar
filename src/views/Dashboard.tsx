import RecentTransactions from "../components/Dashboard/RecentTransactions";
import WeeklyActivity from "../components/Dashboard/WeeklyActivity/WeeklyActivity";
import styled from "styled-components";
import ExpenseStatistics from "../components/Dashboard/ExpenseStatistics/ExpenseStatistics";
import MyCards from "../components/Dashboard/MyCards";
import QuickTransfer from "../components/Dashboard/QuickTransfer";
import BalanceHistory from "../components/Dashboard/BalanceHistory/BalanceHistory";

function Dashboard() {
  return (
    <StyledDashboard>
      <Row>
        <MyCards />
        <RecentTransactions />
      </Row>
      <Row>
        <WeeklyActivity />
        <ExpenseStatistics />
      </Row>
      <Row>
        <QuickTransfer />
        <BalanceHistory />
      </Row>
    </StyledDashboard>
  );
}

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
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export default Dashboard;
