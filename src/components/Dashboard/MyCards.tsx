import { useState } from "react";
import styled from "styled-components";
import CardChip from "../../assets/Chip_Card.png";
import CardChip2 from "../../assets/Chip_Card (1).png";
import CardLogo from "../../assets/Group 17.png";
import CardLogo2 from "../../assets/Group 17 (1).png";
import { motion } from "framer-motion";
import { CreditCardType } from "../../types";
import Label from "../Label";

const CardsData = [
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
] as CreditCardType[];

function MyCards() {
  const [seeAll, setSeeAll] = useState<boolean>(false);

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
        <Label
          click={() => setSeeAll(!seeAll)}
          sx={{ cursor: "pointer", marginTop: '5px' }}
          color="#343C6A"
          size="15px"
          weight={600}
        >
          {seeAll ? "Show Less" : "See All"}
        </Label>
      </Header>
      <CardsGrid>
        {CardsData.map((card) => (
          <Card key={card.id} cardType={card.type}>
            <CardContent>
              <CardHeader>
                <div>
                  <Label
                    color={card.type === "black" ? "#FFFFFF" : "#718EBF"}
                    size="12px"
                    weight={400}
                  >
                    Balance
                  </Label>
                  <Label
                    color={card.type === "black" ? "#FFFFFF" : "#343C6A"}
                    size="18px"
                    weight={600}
                  >
                    ${card.balance}
                  </Label>
                </div>
                <img
                  src={card.type === "black" ? CardChip : CardChip2}
                  alt="Card Chip"
                  style={{ width: "35px", height: "35px" }}
                />
              </CardHeader>
              <CardDetails>
                <div>
                  <Label
                    weight={400}
                    size="12px"
                    color={
                      card.type === "black"
                        ? "rgba(255, 255, 255, 0.7)"
                        : "#718EBF"
                    }
                  >
                    CARD HOLDER
                  </Label>
                  <Label
                    weight={600}
                    size="15px"
                    color={card.type === "black" ? "white" : "#343C6A"}
                  >
                    {card.holder}
                  </Label>
                </div>
                <div>
                  <Label
                    weight={400}
                    size="12px"
                    color={
                      card.type === "black"
                        ? "rgba(255, 255, 255, 0.7)"
                        : "#718EBF"
                    }
                  >
                    VALID THRU
                  </Label>
                  <Label
                    weight={600}
                    size="15px"
                    color={card.type === "black" ? "white" : "#343C6A"}
                  >
                    {card.valid}
                  </Label>
                </div>
              </CardDetails>
            </CardContent>
            <CardFooter cardType={card.type}>
              <CardFooterContent>
                <Label
                  size="22px"
                  weight={600}
                  color={card.type === "black" ? "white" : "#343C6A"}
                >
                  {card.cardNo}
                </Label>
                <img
                  src={card.type === "black" ? CardLogo : CardLogo2}
                  alt="Card Logo"
                  style={{ width: "44px", height: "30px" }}
                />
              </CardFooterContent>
            </CardFooter>
          </Card>
        ))}
      </CardsGrid>
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
`;

const Card = styled.div<{ cardType: string }>`
  min-width: 350px;
  height: 235px;
  border-radius: 25px;
  box-sizing: border-box;
  background: ${({ cardType }) =>
    cardType === "black"
      ? "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(91,90,111,1) 100%)"
      : "white"};
  border: ${({ cardType }) =>
    cardType === "black" ? "none" : "1px solid #DFEAF2"};
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

const CardFooter = styled.div<{ cardType: string }>`
  width: 100%;
  height: 70px;
  background: ${({ cardType }) =>
    cardType === "black"
      ? "linear-gradient(180deg, rgba(225, 225, 225, 0.15) 0%, rgba(225, 225, 225, 0) 100%)"
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${({ cardType }) =>
    cardType === "black" ? "none" : "1px solid rgba(223, 234, 242, 1)"};
`;

const CardFooterContent = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 300px;
  justify-content: space-between;
`;

export default MyCards;
