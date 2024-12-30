import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { breakpoints } from "../../../utils";
import { useMediaQuery } from "react-responsive";

const QuickTransferLoading = () => {
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });
  return (
    <ContentBox>
      <UsersSection>
        <StyledUserContainer>
          {[...Array(3)].map((_, index) => (
            <UserCard key={index}>
              <Skeleton circle height={isTablet ? 70 : 50} width={isTablet ? 70 : 50} />
              <Skeleton height={16} width={isTablet ? 90 : 70} style={{ marginTop: "10px" }} />
              <Skeleton height={15} width={isTablet ? 70 : 50} style={{ marginTop: "5px" }} />
            </UserCard>
          ))}
        </StyledUserContainer>
        <ArrowContainer>
          <Skeleton circle height={isTablet ? 50 : 40} width={isTablet ? 50 : 40} />
          <Skeleton circle height={isTablet ? 50 : 40} width={isTablet ? 50 : 40} />
        </ArrowContainer>
      </UsersSection>

      <SendSection>
        <Skeleton width={isTablet ? 100 : 80} height={16} />
        <AmountContainer>
          <Skeleton width={isTablet ? 120 : 100} height={30} style={{ marginLeft: "10px" }} />
          <SendButton>
            <Skeleton width={isTablet ? 60 : 40} height={20} />
          </SendButton>
        </AmountContainer>
      </SendSection>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  width: 100%;
  height: 195px;
  gap: 29px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    height: 276px;
  }
`;

const UsersSection = styled.div`
  width: 100%;
  max-width: 394px;
  height: 93px;
  display: flex;

  @media (min-width: ${breakpoints.tablet}) {
    height: 127px;
  }
`;

const StyledUserContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 3%;
`;

const UserCard = styled.div`
  min-width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ArrowContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SendSection = styled.div`
  width: 289px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    width: 395px;
    height: 50px;
  }
`;

const AmountContainer = styled.div`
  width: 187px;
  height: 100%;
  background-color: #edf1f7;
  display: flex;
  border-radius: 50px;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    width: 265px;
  }
`;

const SendButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 50px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 125px;
    height: 50px;
  }
`;

export default QuickTransferLoading;
