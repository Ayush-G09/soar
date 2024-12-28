import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const BarChartSkeleton = () => {
  return (
    <SkeletonWrapper>
      <LegendWrapper>
        <Skeleton width={100} height={20} style={{ marginRight: "1rem" }} />
        <Skeleton width={100} height={20} />
      </LegendWrapper>

      <GridWrapper>
        <YAxis>
          <Skeleton
            height={20}
            width={30}
            count={5}
            style={{ marginBottom: "1rem" }}
          />
        </YAxis>

        <BarsWrapper>
          {Array.from({ length: 7 }).map((_, idx) => (
            <Skeleton
              key={idx}
              height={`${Math.random() * 50 + 100}px`}
              width="20%"
              style={{ borderRadius: "8px" }}
            />
          ))}
        </BarsWrapper>

        <XAxis>
          {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, idx) => (
            <Skeleton key={idx} width={50} height={15} />
          ))}
        </XAxis>
      </GridWrapper>
    </SkeletonWrapper>
  );
};

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 70%;
  padding: 1rem;
`;

const LegendWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const GridWrapper = styled.div`
  position: relative;
  height: 100%;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`;

const YAxis = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
`;

const BarsWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 15%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`;

const XAxis = styled.div`
  position: absolute;
  bottom: 5%;
  left: 15%;
  right: 5%;
  display: flex;
  justify-content: space-between;
`;

export default BarChartSkeleton;
