import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import CardChip from "../../../assets/Chip_Card.png";
import CardChip2 from "../../../assets/Chip_Card (1).png";
import CardLogo from "../../../assets/Group 17.png";
import CardLogo2 from "../../../assets/Group 17 (1).png";
import { motion } from "framer-motion";
import { CreditCardType } from "../../../types";
import Label from "../../Label";
import CardsLoading from "./Loading";

type State = {
  loading: boolean;
  cardsData: CreditCardType[];
};

function MyCards() {
  const [seeAll, setSeeAll] = useState<boolean>(false);
  const [state, setState] = useState<State>({
    loading: false,
    cardsData: [],
  });

  const cardElements = useMemo(() => {
    return state.cardsData.map((card) => {
      const isBlackCard = card.type === "black";
      const cardChip = isBlackCard ? CardChip : CardChip2;
      const cardLogo = isBlackCard ? CardLogo : CardLogo2;
      const textColor = isBlackCard ? "white" : "#343C6A";
      const secondaryTextColor = isBlackCard
        ? "rgba(255, 255, 255, 0.7)"
        : "#718EBF";

      return (
        <Card key={card.id} $cardType={card.type}>
          <CardContent>
            <CardHeader>
              <div>
                <Label color={textColor} size="12px" weight={400}>
                  Balance
                </Label>
                <Label color={textColor} size="18px" weight={600}>
                  ${card.balance}
                </Label>
              </div>
              <img src={cardChip} alt="Card Chip" />
            </CardHeader>
            <CardDetails>
              <div>
                <Label weight={400} size="12px" color={secondaryTextColor}>
                  CARD HOLDER
                </Label>
                <Label weight={600} size="15px" color={textColor}>
                  {card.holder}
                </Label>
              </div>
              <div>
                <Label weight={400} size="12px" color={secondaryTextColor}>
                  VALID THRU
                </Label>
                <Label weight={600} size="15px" color={textColor}>
                  {card.valid}
                </Label>
              </div>
            </CardDetails>
          </CardContent>
          <CardFooter $cardType={card.type}>
            <CardFooterContent>
              <Label size="22px" weight={600} color={textColor}>
                {card.cardNo}
              </Label>
              <img src={cardLogo} alt="Card Logo" />
            </CardFooterContent>
          </CardFooter>
        </Card>
      );
    });
  }, [state.cardsData]);

  const mockApi = () => {
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500;
      setTimeout(() => {
        resolve({
          data: [
            {
              id: "753689",
              type: "black",
              balance: 5756,
              holder: "Eddy Cusuma",
              valid: "12/22",
              cardNo: "3778 **** **** 1234",
            },
            {
              id: "951258",
              type: "white",
              balance: 4556,
              holder: "Elf Cusuma",
              valid: "12/26",
              cardNo: "3778 **** **** 1234",
            },
            {
              id: "156248",
              type: "black",
              balance: 5756,
              holder: "Eddy Cusuma",
              valid: "12/22",
              cardNo: "3778 **** **** 1234",
            },
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
          cardsData: response.data,
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
    <Container
      initial={{ height: 282 }}
      animate={{ height: seeAll ? "auto" : 282 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Header>
        <Label color="#343C6A" size="22px" weight={600}>
          My Cards
        </Label>
        {!state.loading && state.cardsData.length ? (
          <Label
            click={() => setSeeAll(!seeAll)}
            sx={{ cursor: "pointer", marginTop: "5px" }}
            color="#343C6A"
            size="15px"
            weight={600}
          >
            {seeAll ? "Show Less" : "See All"}
          </Label>
        ) : null}
      </Header>
      {state.loading ? <CardsLoading /> : <CardsGrid>{cardElements}</CardsGrid>}
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 730px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  min-height: 47px;
  display: flex;
  justify-content: space-between;
`;

const CardsGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  overflow: hidden;
  place-items: stretch;
`;

const Card = styled.div<{ $cardType: string }>`
  width: 350px;
  height: 235px;
  border-radius: 25px;
  box-sizing: border-box;
  background: ${({ $cardType }) =>
    $cardType === "black"
      ? "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(91,90,111,1) 100%)"
      : "white"};
  border: ${({ $cardType }) =>
    $cardType === "black" ? "none" : "1px solid #DFEAF2"};
`;

const CardContent = styled.div`
  width: 100%;
  height: 165px;
  padding: 25px;
  box-sizing: border-box;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  height: 38px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CardDetails = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 67px;
`;

const CardFooter = styled.div<{ $cardType: string }>`
  width: 100%;
  height: 70px;
  background: ${({ $cardType }) =>
    $cardType === "black"
      ? "linear-gradient(180deg, rgba(225, 225, 225, 0.15) 0%, rgba(225, 225, 225, 0) 100%)"
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${({ $cardType }) =>
    $cardType === "black" ? "none" : "1px solid rgba(223, 234, 242, 1)"};
`;

const CardFooterContent = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 300px;
  justify-content: space-between;
`;

export default MyCards;
