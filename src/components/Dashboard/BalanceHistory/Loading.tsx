import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const BalanceHistoryLoading = () => {
  return (
    <BalanceHistoryContainer>
      <ChartContainer>
        <AxisContainer>
          <YAxis>
            <Skeleton height={"100%"} width={20} />
          </YAxis>
          <XAxis>
            <Skeleton height={20} width={"100%"} />
          </XAxis>
        </AxisContainer>

        <DataPoints>
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "20%", left: "15%" }}
          />
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "40%", left: "25%" }}
          />
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "50%", left: "35%" }}
          />
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "30%", left: "45%" }}
          />
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "50%", left: "60%" }}
          />
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "30%", left: "70%" }}
          />
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "50%", left: "85%" }}
          />
          <Skeleton
            circle={true}
            height={20}
            width={20}
            style={{ position: "absolute", top: "30%", left: "90%" }}
          />
        </DataPoints>
      </ChartContainer>
    </BalanceHistoryContainer>
  );
};

const BalanceHistoryContainer = styled.div`
  width: 100%;
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 276px;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden; /* Ensures no skeletons go outside the container */
`;

const AxisContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const XAxis = styled.div`
  position: absolute;
  bottom: 20px; /* Position X-axis at the bottom */
  left: 10%;
  width: 80%;
`;

const YAxis = styled.div`
  position: absolute;
  left: 20px; /* Position Y-axis on the left */
  top: 20%;
  height: 60%;
`;

const DataPoints = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default BalanceHistoryLoading;
