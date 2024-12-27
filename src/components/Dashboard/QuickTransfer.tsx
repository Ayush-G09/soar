import { useEffect, useRef, useState, useMemo } from 'react';
import Label from '../Label';
import user1 from '../../assets/user1.svg';
import user2 from '../../assets/user2.svg';
import user3 from '../../assets/user3.png';
import styled from 'styled-components';
import { UserType } from '../../types';
import CircularBadge from '../CircularBadge';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';
import send from '../../assets/Send.png';
import { breakpoints } from '../../utils';
import { useMediaQuery } from 'react-responsive';

const UsersData = [
  { id: '7894', name: 'Livia Bator', role: 'CEO', img: user1 },
  { id: '7895', name: 'Randy Press', role: 'Director', img: user3 },
  { id: '7896', name: 'Workman', role: 'Designer', img: user2 },
  { id: '7897', name: 'Alex Voo', role: 'Workman', img: user1 },
  { id: '7898', name: 'John Cena', role: 'Workman', img: user3 },
] as UserType[];

function QuickTransfer() {
  const [selected, setSelected] = useState<string>('');
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const childWidth = containerRef.current.firstChild
        ? (containerRef.current.firstChild as HTMLElement).offsetWidth
        : 0;
      const scrollAmount = direction === 'left' ? -(childWidth + 12) : childWidth + 12;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsScrollStart(scrollLeft === 0);
      setIsScrollEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const usersList = useMemo(
    () =>
      UsersData.map((user) => (
        <UserCard
          key={user.id}
          onClick={() => setSelected(user.id)}
        >
          <UserImage src={user.img} alt={user.name} />
          <UserName style={{fontWeight: selected === user.id ? 700 : 400}}>
            {user.name}
          </UserName>
          <UserRole style={{fontWeight: selected === user.id ? 700 : 400}}>
            {selected === user.id ? user.role.toUpperCase() : user.role}
          </UserRole>
        </UserCard>
      )),
    [selected]
  );

  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet })

  return (
    <Container>
      <Heading>
        Quick Transfer
      </Heading>
      <ContentBox>
        <UsersSection>
          <StyledUserContainer ref={containerRef}>
            {usersList}
          </StyledUserContainer>
          <ArrowContainer>
            {!isScrollEnd && (
              <CircularBadge
                onClick={() => handleScroll('right')}
                sx={BadgeStyle}
                img={rightArrow}
                size={isTablet ? "50px" : "40px"}
                bg='whiite'
              />
            )}
            {!isScrollStart && (
              <CircularBadge
                onClick={() => handleScroll('left')}
                sx={BadgeStyle}
                img={leftArrow}
                size={isTablet ? "50px" : "40px"}
                bg='white'
              />
            )}
          </ArrowContainer>
        </UsersSection>
        <SendSection>
          <AmountLabel>
            Write Amount
          </AmountLabel>
          <AmountContainer>
            <Input placeholder="e.g. 505.5" />
            <SendButton>
              <SendButtonText>
                Send
              </SendButtonText>
              <SendIcon src={send} alt="Send" />
            </SendButton>
          </AmountContainer>
        </SendSection>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 229px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
        width: 445px;
  height: 323px;
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

const AmountLabel = styled.label`
font-size: 12px;
font-weight: 400;
color: #343C6A;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 22px;
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
  width: 289px;
  height: 93px;
  display: flex;

  @media (min-width: ${breakpoints.tablet}) {
  width: 394px;
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

const UserName = styled.label`
font-size: 12px;
color: #232323;

@media (min-width: ${breakpoints.tablet}) {
        font-size: 16px;
      }
`;

const UserRole = styled.label`
font-size: 12px;
color: #718EBF;

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
  width: 67px;
  height: 90%;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 15px;

  @media (min-width: ${breakpoints.tablet}) {
        padding: 0 10px;
        width: 110px;
      }
`;

const SendButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #232323;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;

  @media (min-width: ${breakpoints.tablet}) {
        width: 125px;
        height: 50px;
      }
`;

const SendButtonText = styled.div`
  font-weight: 500; 
  font-size: 13px; 
  color: #FFFFFF;

  @media (min-width: ${breakpoints.tablet}) {
        font-size: 16px; 
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

const Badge = styled(CircularBadge)`
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
  cursor: pointer;
  background-color: white;
`;

const BadgeStyle = {
  boxShadow: '4px 4px 18px -2px #E7E4E8CC',
  cursor: 'pointer',
  bg: 'white',
};

export default QuickTransfer;
