import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { breakpoints } from "../../../utils";
import { useMediaQuery } from "react-responsive";

const RecentTransactionLoading = () => {
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });
  return (
    <Container>
      <TransactionList>
        {Array.from({ length: 3 }).map((_, index) => (
          <TransactionItem key={index}>
            <SkeletonCircle>
              <Skeleton circle={true} height={isTablet ? 50 : 40} width={isTablet ? 50 : 40} />
            </SkeletonCircle>

            <TransactionDetails>
              <Skeleton
                width={isTablet ? 150 : 100}
                height={isTablet ? 18 : 12}
                style={{ marginBottom: "0.5rem" }}
              />
              <Skeleton width={120} height={15} />
            </TransactionDetails>

            <Skeleton width={60} height={isTablet ? 18 : 12} style={{ marginLeft: "auto" }} />
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
  height: 214px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    height: 235px;
  }
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkeletonCircle = styled.div`
  flex-shrink: 0;
`;

export default RecentTransactionLoading;
