import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const RecentTransactionLoading = () => {
  return (
    <Container>
      <TransactionList>
        {Array.from({ length: 3 }).map((_, index) => (
          <TransactionItem key={index}>
            <SkeletonCircle>
              <Skeleton circle={true} height={50} width={50} />
            </SkeletonCircle>

            <TransactionDetails>
              <Skeleton
                width={150}
                height={18}
                style={{ marginBottom: "0.5rem" }}
              />
              <Skeleton width={120} height={15} />
            </TransactionDetails>

            <Skeleton width={60} height={18} style={{ marginLeft: "auto" }} />
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
`;

const TransactionList = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkeletonCircle = styled.div`
  flex-shrink: 0;
`;

export default RecentTransactionLoading;
