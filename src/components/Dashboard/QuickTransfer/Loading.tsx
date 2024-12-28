import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const QuickTransferLoading = () => {
  return (
    <ContentBox>
      <UsersSection>
        <StyledUserContainer>
          {[...Array(3)].map((_, index) => (
            <UserCard key={index}>
              <Skeleton circle height={70} width={70} />
              <Skeleton height={16} width={90} style={{ marginTop: "10px" }} />
              <Skeleton height={15} width={70} style={{ marginTop: "5px" }} />
            </UserCard>
          ))}
        </StyledUserContainer>
        <ArrowContainer>
          <Skeleton circle height={50} width={50} />
          <Skeleton circle height={50} width={50} />
        </ArrowContainer>
      </UsersSection>

      <SendSection>
        <Skeleton width={100} height={16} />
        <AmountContainer>
          <Skeleton width={120} height={30} style={{ marginLeft: "10px" }} />
          <SendButton>
            <Skeleton width={60} height={20} />
          </SendButton>
        </AmountContainer>
      </SendSection>
    </ContentBox>
  );
};

const ContentBox = styled.div`
  width: 100%;
  height: 276px;
  gap: 29px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UsersSection = styled.div`
  width: 394px;
  height: 127px;
  display: flex;
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
  width: 395px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  width: 265px;
  height: 100%;
  background-color: #edf1f7;
  display: flex;
  border-radius: 50px;
  align-items: center;
`;

const SendButton = styled.div`
  width: 125px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 50px;
`;

export default QuickTransferLoading;
