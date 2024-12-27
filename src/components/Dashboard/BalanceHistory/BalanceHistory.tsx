import styled from 'styled-components';
import Label from '../../Label';
import BalanceChart from './BalanceChart';

function BalanceHistory() {
  return (
    <BalanceHistoryContainer>
      <Label weight={600} size='22px' color='#343C6A'>Balance History</Label>
      <ChartContainer>
        <BalanceChart />
      </ChartContainer>
    </BalanceHistoryContainer>
  );
};

const BalanceHistoryContainer = styled.div`
  width: 635px;
  height: 323px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 276px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export default BalanceHistory;
