import styled from 'styled-components';
import Label from '../../Label';
import ExpenseChart from './ExpenseChart';

function ExpenseStatistics() {
  return (
    <Container>
      <Label weight={600} size="22px" color="#343C6A">Expense Statistics</Label>
      <ChartWrapper>
        <ExpenseChart />
      </ChartWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: 367px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 322px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ExpenseStatistics;
