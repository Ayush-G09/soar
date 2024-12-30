import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import CardChip from "../../../assets/Chip_Card.png";
import CardChip2 from "../../../assets/Chip_Card (1).png";
import CardLogo from "../../../assets/Group 17.png";
import CardLogo2 from "../../../assets/Group 17 (1).png";
import { motion } from "framer-motion";
import { CreditCardType } from "../../../types";
import CardsLoading from "./Loading";
import { Heading } from "../WeeklyActivity/WeeklyActivity";
import { breakpoints } from "../../../utils";
import { useMediaQuery } from "react-responsive";

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

  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

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
                <BalanceLabel style={{color: textColor}}>
                  Balance
                </BalanceLabel>
                <Balance style={{color: textColor}}>
                  ${card.balance}
                </Balance>
              </div>
              <CardChipImage src={cardChip} alt="Card Chip" />
            </CardHeader>
            <CardDetails>
              <div>
                <DetailLabel style={{color: secondaryTextColor}}>
                  CARD HOLDER
                </DetailLabel>
                <DetailContent style={{color: textColor}}>
                  {card.holder}
                </DetailContent>
              </div>
              <div>
                <DetailLabel style={{color: secondaryTextColor}}>
                  VALID THRU
                </DetailLabel>
                <DetailContent style={{color: textColor}}>
                  {card.valid}
                </DetailContent>
              </div>
            </CardDetails>
          </CardContent>
          <CardFooter $cardType={card.type}>
            <CardFooterContent>
              <CardNo style={{color: textColor}}>
                {card.cardNo}
              </CardNo>
              <CardLogoImage src={cardLogo} alt="Card Logo" />
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
      initial={{ height: isTablet ? 282 : 201 }}
      animate={{ height: seeAll ? "auto" : isTablet ? 282 : 201 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Header>
        <Heading>
          My Cards
        </Heading>
        {!state.loading && state.cardsData.length ? (
          <Show
            onClick={() => setSeeAll(!seeAll)}
            onKeyDown={(event) => {
              if (event.key === "Enter") setSeeAll(!seeAll);
            }}
            aria-label={seeAll ? "Show less cards" : "See all cards"}
          >
            {seeAll ? "Show Less" : "See All"}
          </Show>
        ) : null}
      </Header>
      {state.loading ? <CardsLoading /> : <CardsGrid>{cardElements}</CardsGrid>}
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100%;
  max-width: 730px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Header = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    height: 47px;
  }
`;

const CardsGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  gap: 30px;
  overflow: hidden;
  place-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: stretch;
  }
`;

const Card = styled.div<{ $cardType: string }>`
  width: 265px;
  height: 170px;
  border-radius: 25px;
  box-sizing: border-box;
  background: ${({ $cardType }) =>
    $cardType === "black"
      ? "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(91,90,111,1) 100%)"
      : "white"};
  border: ${({ $cardType }) =>
    $cardType === "black" ? "none" : "1px solid #DFEAF2"};

  @media (min-width: ${breakpoints.tablet}) {
    width: 350px;
    height: 235px;
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: 119px;
  padding: 25px;
  box-sizing: border-box;
  gap: 15px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    height: 165px;
    gap: 30px;
  }
`;

const CardHeader = styled.div`
  height: 33px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    height: 38px;
  }
`;

const CardDetails = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 57px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 35px;
    gap: 67px;
  }
`;

const CardFooter = styled.div<{ $cardType: string }>`
  width: 100%;
  height: 51px;
  background: ${({ $cardType }) =>
    $cardType === "black"
      ? "linear-gradient(180deg, rgba(225, 225, 225, 0.15) 0%, rgba(225, 225, 225, 0) 100%)"
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${({ $cardType }) =>
    $cardType === "black" ? "none" : "1px solid rgba(223, 234, 242, 1)"};

  @media (min-width: ${breakpoints.tablet}) {
    height: 70px;
  }
`;

const CardFooterContent = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  width: 228px;
  justify-content: space-between;
  
  @media (min-width: ${breakpoints.tablet}) {
    height: 30px;
    width: 300px;
  }
`;

const CardChipImage = styled.img`
width: 29px;
height: 29px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 35px;
    width: 35px;
  }
`;

const CardLogoImage = styled.img`
width: 27px;
height: 18.4px;

  @media (min-width: ${breakpoints.tablet}) {
    height: 30px;
    width: 44px;
  }
`;

const BalanceLabel = styled.label`
font-size: 10px;
weight: 400;

@media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`;

const Balance = styled.label`
font-size: 16px;
weight: 600;

@media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const DetailLabel = styled.label`
font-size: 10px;
weight: 400;

@media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`;

const DetailContent = styled.label`
font-size: 13px;
weight: 600;

@media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`;

const CardNo = styled.label`
font-size: 15px;
weight: 600;

@media (min-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }
`;

const Show = styled.label`
font-size: 13px;
weight: 600;
color: #343C6A;
cursor: pointer;

@media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export default MyCards;
