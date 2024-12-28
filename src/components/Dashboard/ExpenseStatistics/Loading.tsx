import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const PieChartSkeleton = () => {
  return (
    <SkeletonWrapper>
      <SkeletonCircleWrapper>
        <Skeleton circle={true} height={250} width={250} />
      </SkeletonCircleWrapper>
    </SkeletonWrapper>
  );
};

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkeletonCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export default PieChartSkeleton;
