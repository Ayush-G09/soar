import styled from "styled-components";
import Label from "../../Label";
import BalanceChart from "./BalanceChart";
import BalanceHistoryLoading from "./Loading";
import { useEffect, useState } from "react";
import { Heading } from "../WeeklyActivity/WeeklyActivity";
import { breakpoints } from "../../../utils";

type State = {
  loading: boolean;
  date: string[];
  data: number[];
};

function BalanceHistory() {
  const [state, setState] = useState<State>({
    loading: false,
    date: [],
    data: [],
  });

  const mockApi = () => {
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500;
      setTimeout(() => {
        resolve({
          date: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
          data: [150, 400, 450, 780, 220, 550, 600],
        });
      }, delay);
    });
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    mockApi()
      .then((response: any) => {
        setState((prev) => ({
          ...prev,
          data: response.data,
          date: response.date,
        }));
      })
      .catch((err: any) => {
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setState((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return (
    <BalanceHistoryContainer>
      <Heading>
        Balance History
      </Heading>
      <ChartContainer>
        {state.loading ? (
          <BalanceHistoryLoading />
        ) : (
          <BalanceChart data={state.data} date={state.date} />
        )}
      </ChartContainer>
    </BalanceHistoryContainer>
  );
}

const BalanceHistoryContainer = styled.div`
  width: 100%;
  max-width: 635px;
  height: 254px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    height: 323px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 223px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 276px;
  }
`;

export default BalanceHistory;
