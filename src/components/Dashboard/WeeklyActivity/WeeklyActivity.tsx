import styled from "styled-components";
import Label from "../../Label";
import ActivityChart from "./ActivityChart";
import ChartSkeleton from "./Loading";
import { useEffect, useState } from "react";

type State = {
  loading: boolean;
  day: string[];
  withdraw: number[];
  deposit: number[];
};

function WeeklyActivity() {
  const [state, setState] = useState<State>({
    loading: false,
    day: [],
    withdraw: [],
    deposit: [],
  });

  const mockApi = () => {
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500;
      setTimeout(() => {
        resolve({
          day: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
          withdraw: [480, 340, 320, 480, 150, 390, 400],
          deposit: [240, 130, 270, 380, 230, 230, 340],
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
          day: response.day,
          deposit: response.deposit,
          withdraw: response.withdraw,
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
    <Container>
      <Label weight={600} size="22px" color="#343C6A">
        Weekly Activity
      </Label>
      <ChartWrapper>
        {state.loading ? (
          <ChartSkeleton />
        ) : (
          <ActivityChart
            days={state.day}
            deposit={state.deposit}
            withdraw={state.withdraw}
          />
        )}
      </ChartWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 730px;
  height: 367px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 322px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default WeeklyActivity;
