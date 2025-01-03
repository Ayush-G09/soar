import styled from "styled-components";
import Label from "../../Label";
import ExpenseChart from "./ExpenseChart";
import PieChartSkeleton from "./Loading";
import { useEffect, useState } from "react";
import { breakpoints } from "../../../utils";
import { Heading } from "../WeeklyActivity/WeeklyActivity";

type State = {
  data: [];
  loading: boolean;
};

function ExpenseStatistics() {
  const [state, setState] = useState<State>({
    data: [],
    loading: false,
  });

  const mockApi = () => {
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500;
      setTimeout(() => {
        resolve({
          data: [
            {
              value: 30,
              name: "Entertainment",
              itemStyle: { color: "#343C6A" },
            },
            {
              value: 15,
              name: "Bill Expense",
              itemStyle: { color: "#FC7900" },
            },
            { value: 35, name: "Other", itemStyle: { color: "#232323" } },
            { value: 20, name: "Investment", itemStyle: { color: "#396AFF" } },
          ],
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
      <Heading>
        Expense Statistics
      </Heading>
      <ChartWrapper>
        {state.loading ? (
          <PieChartSkeleton />
        ) : (
          <ExpenseChart data={state.data} />
        )}
      </ChartWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 350px;
  height: 271px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    height: 367px;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    height: 322px;
  }
`;

export default ExpenseStatistics;
