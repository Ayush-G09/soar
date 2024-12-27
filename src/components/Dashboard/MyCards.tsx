import { useState, useMemo } from "react";
import styled from "styled-components";
import CardChip from "../../assets/Chip_Card.png";
import CardChip2 from "../../assets/Chip_Card (1).png";
import CardLogo from "../../assets/Group 17.png";
import CardLogo2 from "../../assets/Group 17 (1).png";
import { motion } from "framer-motion";
import { CreditCardType } from "../../types";
import Label from "../Label";
import { breakpoints } from "../../utils";
import { useMediaQuery } from "react-responsive";

const CardsData = [
  { id: "753689", type: "black", balance: 5756, holder: "Eddy Cusuma", valid: "12/22", cardNo: "3778 **** **** 1234" },
  { id: "951258", type: "white", balance: 4556, holder: "Elf Cusuma", valid: "12/26", cardNo: "3778 **** **** 1234" },
  { id: "156248", type: "black", balance: 5756, holder: "Eddy Cusuma", valid: "12/22", cardNo: "3778 **** **** 1234" },
] as CreditCardType[];

function MyCards() {
  const [seeAll, setSeeAll] = useState<boolean>(false);

  const cardElements = useMemo(() => {
    return CardsData.map((card) => {
      const isBlackCard = card.type === "black";
      const cardChip = isBlackCard ? CardChip : CardChip2;
      const cardLogo = isBlackCard ? CardLogo : CardLogo2;
      const textColor = isBlackCard ? "white" : "#343C6A";
      const secondaryTextColor = isBlackCard ? "rgba(255, 255, 255, 0.7)" : "#718EBF";

      return (
        <Card key={card.id} $cardType={card.type}>
          <CardContent>
            <CardHeader>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <BalanceLabel style={{color: textColor}}>Balance</BalanceLabel>
                <Balance style={{color: textColor}}>${card.balance}</Balance>
              </div>
              <Chip src={cardChip} alt="Card Chip" />
            </CardHeader>
            <CardDetails>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <DetailLabel style={{color: secondaryTextColor}}>CARD HOLDER</DetailLabel>
                <DetailValue style={{color: textColor}}>{card.holder}</DetailValue>
              </div>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <DetailLabel style={{color: secondaryTextColor}}>VALID THRU</DetailLabel>
                <DetailValue style={{color: textColor}}>{card.valid}</DetailValue>
              </div>
            </CardDetails>
          </CardContent>
          <CardFooter $cardType={card.type}>
            <CardFooterContent>
              <Account style={{color: textColor}}>{card.cardNo}</Account>
              <CardLogoImg src={cardLogo} alt="Card Logo" />
            </CardFooterContent>
          </CardFooter>
        </Card>
      );
    });
  }, [CardsData]);

  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet })

  return (
    <Container initial={{ height: isTablet ? 282 : 218 }} animate={{ height: seeAll ? "auto" : isTablet ? 282 : 218 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
      <Header>
        <Heading>My Cards</Heading>
        <SubHeading onClick={() => setSeeAll(!seeAll)}>
          {seeAll ? "Show Less" : "See All"}
        </SubHeading>
      </Header>
      <CardsGrid>{cardElements}</CardsGrid>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
        width: 730px;
      }
`;

const Heading = styled.label`
font-size: 16px;
font-weight: 600;
color: #343C6A;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 22px;
      }
`;

const SubHeading = styled.label`
cursor: pointer;
margin-top: 5px;
font-size: 14px;
font-weight: 600;
color: #343C6A;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 15px;
      }
`;

const Chip = styled.img`
width: 29px;
height: 29px;

@media (min-width: ${breakpoints.tablet}) {
        width: 35px;
height: 35px;
      }
`;

const BalanceLabel = styled.label`
  font-weight: 400;
  font-size: 11px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`;

const Balance = styled.label`
font-weight: 600;
  font-size: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const DetailLabel = styled.label`
font-weight: 400;
  font-size: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`;

const DetailValue = styled.label`
font-weight: 600;
  font-size: 13px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`;

const Account = styled.label`
font-weight: 600;
  font-size: 15px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }
`;

const CardLogoImg = styled.img`
width: 27px;
height: 18.41px;

@media (min-width: ${breakpoints.tablet}) {
    width: 44px;
height: 30px;
  }
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
  grid-template-columns: 1fr;
  gap: 30px;
  overflow: hidden;
  place-items: center;

  @media (min-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: stretch;
      }
`;

const Card = styled.div<{ $cardType: string }>`
  width: 256px; 
  height: 170px;
  border-radius: 25px;
  box-sizing: border-box;
  background: ${({ $cardType }) => ($cardType === "black" ? "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(91,90,111,1) 100%)" : "white")};
  border: ${({ $cardType }) => ($cardType === "black" ? "none" : "1px solid #DFEAF2")};

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
  gap: 35px;

  @media (min-width: ${breakpoints.tablet}) {
  height: 35px;
  gap: 67px;
      }
`;

const CardFooter = styled.div<{ $cardType: string }>`
  width: 100%;
  height: 51px;
  background: ${({ $cardType }) => ($cardType === "black" ? "linear-gradient(180deg, rgba(225, 225, 225, 0.15) 0%, rgba(225, 225, 225, 0) 100%)" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${({ $cardType }) => ($cardType === "black" ? "none" : "1px solid rgba(223, 234, 242, 1)")};

  @media (min-width: ${breakpoints.tablet}) {
  height: 70px;
      }
`;

const CardFooterContent = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 210px;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
  width: 300px;
      }
`;

export default MyCards;
