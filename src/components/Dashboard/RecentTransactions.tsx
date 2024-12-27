import styled from 'styled-components';
import Label from '../Label';
import CircularBadge from '../CircularBadge';
import Deposit from '../../assets/deposit.png';
import Dollar from '../../assets/dollar.png';
import Paypal from '../../assets/paypal.png';
import { TransactionType } from '../../types';
import { breakpoints } from '../../utils';

const transactionsData = [
  {
    id: '4568',
    badgeType: 'deposit',
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
  },
  {
    id: '4569',
    badgeType: 'paypal',
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
  },
  {
    id: '4570',
    badgeType: 'dollar',
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
  },
] as TransactionType[];

const badgeLookup = {
  deposit: { img: Deposit, bg: '#FFF5D9' },
  paypal: { img: Paypal, bg: '#E7EDFF' },
  dollar: { img: Dollar, bg: '#DCFAF8' },
};

const getAmountColor = (amount: string) => (amount.includes('-') ? '#FF4B4A' : '#41D4A8');

const RecentTransactions = () => {
  return (
    <Container>
      <Heading>
        Recent Transaction
      </Heading>
      <TransactionList>
        {transactionsData.map((data) => (
          <TransactionItem key={data.id}>
            <CircularBadge
              size="50px"
              iconSize="25px"
              bg={badgeLookup[data.badgeType]?.bg || '#DCFAF8'}
              img={badgeLookup[data.badgeType]?.img}
            />
            <TransactionDetails>
              <Title>
                {data.title}
              </Title>
              <Date>
                {data.date}
              </Date>
            </TransactionDetails>
            <Amount style={{color: getAmountColor(data.amount)}}>
              {data.amount}
            </Amount>
          </TransactionItem>
        ))}
      </TransactionList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
        width: 350px;
        height: 282px;
      }
`;

const Heading = styled.label`
font-size: 16px;
font-weight: 600;
color: #343C6A;
margin-bottom: 1rem;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 22px;
      }
`;

const TransactionList = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (min-width: ${breakpoints.tablet}) {
        gap: 1rem;
        width: 100%;
      }
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  gap: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
        width: 301px;
      }
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.label`
font-size: 14px;
font-weight: 500;
color: #232323;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 16px;
      }
`;


const Date = styled.label`
font-size: 12px;
font-weight: 400;
color: #718EBF;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 15px;
      }
`;

const Amount = styled.label`
font-size: 11px;
font-weight: 500;
margin-left: auto;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 16px;
      }
`;

export default RecentTransactions;
