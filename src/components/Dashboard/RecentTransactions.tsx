import React from 'react';
import styled from 'styled-components';
import Label from '../Label';
import CircularBadge from '../CircularBadge';
import Deposit from '../../assets/deposit.png';
import Dollar from '../../assets/dollar.png';
import Paypal from '../../assets/paypal.png';
import { TransactionType } from '../../types';

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

function RecentTransactions() {
  return (
    <Container>
      <Title weight={600} size="22px" color="#343C6A">
        Recent Transaction
      </Title>
      <TransactionList>
        {transactionsData.map((data) => (
          <TransactionItem key={data.id}>
            {data.badgeType === 'deposit' ? (
              <CircularBadge size="50px" icon="25px" bg="#FFF5D9" img={Deposit} />
            ) : data.badgeType === 'paypal' ? (
              <CircularBadge size="50px" icon="25px" bg="#E7EDFF" img={Paypal} />
            ) : (
              <CircularBadge size="50px" icon="25px" bg="#DCFAF8" img={Dollar} />
            )}
            <TransactionDetails>
              <Label weight={500} size="16px" color="#232323">
                {data.title}
              </Label>
              <Label weight={400} size="15px" color="#718EBF">
                {data.date}
              </Label>
            </TransactionDetails>
            <Amount
              weight={500}
              size="16px"
              color={data.amount.includes('-') ? '#FF4B4A' : '#41D4A8'}
              sx={{marginLeft: 'auto'}}
            >
              {data.amount}
            </Amount>
          </TransactionItem>
        ))}
      </TransactionList>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  height: 282px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled(Label)`
  margin-bottom: 1rem;
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
  gap: 1rem;
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  width: 301px;
  gap: 1rem;
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Amount = styled(Label)`
  margin-left: auto;
`;

export default RecentTransactions;
