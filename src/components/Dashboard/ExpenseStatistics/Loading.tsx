import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { breakpoints } from "../../../utils";

const PieChartSkeleton = () => {
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });
  return (
    <SkeletonWrapper>
      <SkeletonCircleWrapper>
        <Skeleton circle={true} height={isTablet ? 250 : 180} width={isTablet ? 250 : 180} />
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
