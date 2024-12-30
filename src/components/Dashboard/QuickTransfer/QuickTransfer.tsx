import { useEffect, useRef, useState, useMemo } from "react";
import Label from "../../Label";
import styled from "styled-components";
import { TransactionType, UserType } from "../../../types";
import CircularBadge from "../../CircularBadge";
import rightArrow from "../../../assets/right-arrow.png";
import leftArrow from "../../../assets/left-arrow.png";
import send from "../../../assets/Send.png";
import QuickTransferLoading from "./Loading";
import { breakpoints, generateRandomId, getFormattedDate } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { addTransaction } from "../../../store/transactionsSlice";
import { addCard, deleteCard } from "../../../store/notificationsSlice";
import { MoonLoader } from "react-spinners";
import { Heading } from "../WeeklyActivity/WeeklyActivity";
import { useMediaQuery } from "react-responsive";

type State = {
  loading: boolean;
  data: UserType[];
  selected: string;
  isScrollStart: boolean;
  isScrollEnd: boolean;
  amount: { value: number; error: string };
  sendingTrx: boolean;
};

function QuickTransfer() {
  const [state, setState] = useState<State>({
    loading: false,
    data: [],
    selected: "",
    isScrollStart: true,
    isScrollEnd: false,
    amount: { value: 0, error: "" },
    sendingTrx: false,
  });
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const childWidth = containerRef.current.firstChild
        ? (containerRef.current.firstChild as HTMLElement).offsetWidth
        : 0;
      const scrollAmount =
        direction === "left" ? -(childWidth + 12) : childWidth + 12;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setState((prev) => ({
        ...prev,
        isScrollStart: scrollLeft <= 0,
        isScrollEnd: scrollLeft + clientWidth >= scrollWidth - 1,
      }));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [state.data]);

  const usersList = useMemo(() => {
    return state.data.map((user) => (
      <UserCard
        key={user.id}
        onClick={() => setState((prev) => ({ ...prev, selected: user.id }))}
      >
        <UserImage src={user.img} alt={user.name} />
        <UsernameLabel
          style={{fontWeight: state.selected === user.id ? 700 : 400}}
        >
          {user.name}
        </UsernameLabel>
        <RoleLabel
          style={{fontWeight: state.selected === user.id ? 700 : 400}}
        >
          {state.selected === user.id ? user.role.toUpperCase() : user.role}
        </RoleLabel>
      </UserCard>
    ));
  }, [state.data, state.selected]);

  const mockApi = async (): Promise<{ data: UserType[] }> => {
    const delay = Math.random() * 3000 + 500;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: users,
        });
      }, delay);
    });
  };

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    mockApi()
      .then((response) => {
        setState((prev) => ({
          ...prev,
          data: response.data,
        }));
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setState((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  const handleAddNotificationCard = (
    type: "success" | "error",
    msg: string
  ) => {
    const id = Date.now();

    dispatch(
      addCard({
        msg: msg,
        type: type,
        id,
      })
    );

    setTimeout(() => {
      dispatch(deleteCard(id));
    }, 5000);
  };

  const handleSend = () => {
    if (state.sendingTrx) {
      return;
    }

    if (!state.amount.value) {
      setState((prev) => ({
        ...prev,
        amount: { ...prev.amount, error: "Amount required" },
      }));
      return;
    } else {
      setState((prev) => ({ ...prev, amount: { ...prev.amount, error: "" } }));
    }

    if (!state.selected) {
      handleAddNotificationCard(
        "error",
        "Select the user to which amount is to be transfered."
      );
      return;
    }

    const data = {
      id: generateRandomId(),
      badgeType: "dollar",
      title: users.find((user) => user.id === state.selected)?.name,
      date: getFormattedDate(),
      amount: -state.amount.value,
    } as TransactionType;
    setState((prev) => ({ ...prev, sendingTrx: true }));

    setTimeout(() => {
      dispatch(addTransaction(data));
      setState((prev) => ({
        ...prev,
        amount: { ...prev.amount, value: 0 },
        sendingTrx: false,
      }));
      handleAddNotificationCard("success", "Transaction successfull !");
    }, 1500);
  };

  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

  return (
    <Container>
      <Heading>
        Quick Transfer
      </Heading>
      {state.loading ? (
        <QuickTransferLoading />
      ) : (
        <ContentBox>
          <UsersSection>
            <StyledUserContainer ref={containerRef}>
              {usersList}
            </StyledUserContainer>
            <ArrowContainer>
              {!state.isScrollEnd && (
                <CircularBadge
                  onClick={() => handleScroll("right")}
                  sx={BadgeStyle}
                  img={rightArrow}
                  size={isTablet ? "50px" : "40px"}
                  bg="white"
                  role="button"
                  aria-label="Scroll to the right"
                  onKeyDown={(e) => e.key === "Enter" && handleScroll("right")}
                />
              )}
              {!state.isScrollStart && (
                <CircularBadge
                  onClick={() => handleScroll("left")}
                  sx={BadgeStyle}
                  img={leftArrow}
                  size={isTablet ? "50px" : "40px"}
                  bg="white"
                  role="button"
                  aria-label="Scroll to the left"
                  onKeyDown={(e) => e.key === "Enter" && handleScroll("left")}
                />
              )}
            </ArrowContainer>
          </UsersSection>
          <div>
            <SendSection>
              <Label color="#718EBF" weight={400} size={isTablet ? "16px" : "12px"}>
                Write Amount
              </Label>
              <AmountContainer
                style={{
                  border: state.amount.error ? "1px solid red" : "none",
                }}
              >
                <Input
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      amount: {
                        ...prev.amount,
                        value: parseInt(e.target.value),
                      },
                    }))
                  }
                  value={state.amount.value ? state.amount.value : ""}
                  placeholder="e.g. 505.5"
                />
                <SendButton tabIndex={0} onClick={handleSend} onKeyDown={(e) => e.key === "Enter" && handleSend()}>
                  {state.sendingTrx ? (
                    <MoonLoader color="white" size={20} />
                  ) : (
                    <>
                      <Label weight={500} size={isTablet ? "16px" : "12px"} color="#FFFFFF">
                        Send
                      </Label>
                      <SendIcon src={send} alt="Send" />
                    </>
                  )}
                </SendButton>
              </AmountContainer>
            </SendSection>
            {state.amount.error && (
              <Label
                sx={{
                  marginLeft: "auto",
                  marginTop: "10px",
                  width: "fit-content",
                }}
                color="red"
                weight={500}
                size="0.7rem"
              >
                {state.amount.error}
              </Label>
            )}
          </div>
        </ContentBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 445px;
  height: 229px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    height: 323px;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 195px;
  gap: 29px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    height: 276px;
  }
`;

const UsersSection = styled.div`
  width: 100%;
  max-width: 394px;
  height: 93px;
  display: flex;

  @media (min-width: ${breakpoints.tablet}) {
    height: 127px;
  }
`;

const StyledUserContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 3%;
  overflow: hidden;
  overflow-x: scroll;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  & > div {
    scroll-snap-align: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

const UserCard = styled.div`
  min-width: 30%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 70px;
    height: 70px;
  }
`;

const UsernameLabel = styled.label`
color: #232323;
font-size: 12px;

@media (min-width: ${breakpoints.tablet}) {
  font-size: 16px;
}
`;

const RoleLabel = styled.label`
color: #718EBF;
font-size: 12px;

@media (min-width: ${breakpoints.tablet}) {
  font-size: 15px;
}
`;

const ArrowContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SendSection = styled.div`
  width: 289px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    width: 395px;
    height: 50px;
  }
`;

const AmountContainer = styled.div`
  width: 187px;
  height: 100%;
  background-color: #edf1f7;
  display: flex;
  border-radius: 50px;
  align-items: center;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    width: 265px;
  }
`;

const Input = styled.input`
  width: 75px;
  height: 90%;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 20px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 120px;
  }
`;

const SendButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: #232323;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;

  &:hover {
    background-color: #1a1a1a;
    box-shadow: 6px 6px 20px -1px #dcdce1;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 12px -1px #b0afaf;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 125px;
    height: 50px;
    gap: 12px;
  }
`;

const SendIcon = styled.img`
  width: 16.11px;
  height: 14px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 26px;
    height: 22.6px;
  }
`;

const BadgeStyle = {
  boxShadow: "4px 4px 18px -2px #E7E4E8CC",
  cursor: "pointer",
  bg: "white",
};

export default QuickTransfer;
