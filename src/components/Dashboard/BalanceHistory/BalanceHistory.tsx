import styled from 'styled-components';
import Label from '../../Label';
import BalanceChart from './BalanceChart';
import { breakpoints } from '../../../utils';

function BalanceHistory() {
  return (
    <BalanceHistoryContainer>
      <Heading>Balance History</Heading>
      <ChartContainer>
        <BalanceChart />
      </ChartContainer>
    </BalanceHistoryContainer>
  );
};

const BalanceHistoryContainer = styled.div`
  width: 300px;
  height: 264px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
        width: 635px;
  height: 323px;
      }
`;

const Heading = styled.label`
font-size: 16px;
font-weight: 600;
color: #343C6A;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 22px;
      }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 223px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  @media (min-width: ${breakpoints.tablet}) {
        height: 276px;
      }
`;

export default BalanceHistory;
