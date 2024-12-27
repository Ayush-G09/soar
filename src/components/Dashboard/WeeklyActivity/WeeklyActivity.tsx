import styled from 'styled-components';
import Label from '../../Label';
import ActivityChart from './ActivityChart';
import { breakpoints } from '../../../utils';

function WeeklyActivity() {
  return (
    <Container>
      <Heading>
        Weekly Activity
      </Heading>
      <ChartWrapper>
        <ActivityChart />
      </ChartWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
        width: 730px;
  height: 367px;
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

const ChartWrapper = styled.div`
  width: 300px;
  height: 254px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
        width: 100%;
  height: 322px;
      }
`;

export default WeeklyActivity;
