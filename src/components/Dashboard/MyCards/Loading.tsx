import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

function CardsLoading() {
  return (
    <Container>
      <StyledSkeleton width={350} height={235} />
      <StyledSkeleton width={350} height={235} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSkeleton = styled(Skeleton)`
  border-radius: 25px;
`;

export default CardsLoading;
