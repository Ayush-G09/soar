import styled from "styled-components";
import Label from "../../Label";
import CircularBadge from "../../CircularBadge";
import Deposit from "../../../assets/deposit.png";
import Dollar from "../../../assets/dollar.png";
import Paypal from "../../../assets/paypal.png";
import { TransactionType } from "../../../types";
import RecentTransactionLoading from "./Loading";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type State = {
  loading: boolean;
  data: TransactionType[];
};

const badgeLookup = {
  deposit: { img: Deposit, bg: "#FFF5D9" },
  paypal: { img: Paypal, bg: "#E7EDFF" },
  dollar: { img: Dollar, bg: "#DCFAF8" },
};

const getAmountColor = (amount: number) => (amount < 0 ? "#FF4B4A" : "#41D4A8");

const RecentTransactions = () => {
  const [state, setState] = useState<State>({
    loading: false,
    data: [],
  });

  const transactions = useSelector((state: RootState) => state.transactions);

  const mockApi = () => {
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500;
      setTimeout(() => {
        resolve({
          data: transactions,
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
  }, [transactions]);

  return (
    <Container>
      <Label weight={600} size="22px" color="#343C6A">
        Recent Transaction
      </Label>
      {state.loading ? (
        <RecentTransactionLoading />
      ) : (
        <TransactionCon>
          <Transactions>
            {state.data
              .slice()
              .reverse()
              .map((data) => (
                <TransactionItem key={data.id}>
                  <CircularBadge
                    size="50px"
                    iconSize="25px"
                    bg={badgeLookup[data.badgeType]?.bg || "#DCFAF8"}
                    img={badgeLookup[data.badgeType]?.img}
                  />
                  <TransactionDetails>
                    <Label weight={500} size="16px" color="#232323">
                      {data.title}
                    </Label>
                    <Label weight={400} size="15px" color="#718EBF">
                      {data.date}
                    </Label>
                  </TransactionDetails>
                  <Label
                    weight={500}
                    size="16px"
                    color={getAmountColor(data.amount)}
                    sx={{ marginLeft: "auto" }}
                  >
                    {`${data.amount.toLocaleString("en-IN")}$`}
                  </Label>
                </TransactionItem>
              ))}
          </Transactions>
        </TransactionCon>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: 282px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TransactionCon = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const Transactions = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  overflow-y: scroll;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  width: 301px;
  gap: 1rem;
`;

const TransactionDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RecentTransactions;
