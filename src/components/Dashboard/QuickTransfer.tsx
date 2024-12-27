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
          <Label weight={selected === user.id ? 700 : 400} size="16px" color="#232323">
            {user.name}
          </Label>
          <Label weight={selected === user.id ? 700 : 400} size="15px" color="#718EBF">
            {selected === user.id ? user.role.toUpperCase() : user.role}
          </Label>
        </UserCard>
      )),
    [selected]
  );

  return (
    <Container>
      <Label weight={600} size="22px" color="#343C6A">
        Quick Transfer
      </Label>
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
                size="50px"
                bg='whiite'
              />
            )}
            {!isScrollStart && (
              <CircularBadge
                onClick={() => handleScroll('left')}
                sx={BadgeStyle}
                img={leftArrow}
                size="50px"
                bg='white'
              />
            )}
          </ArrowContainer>
        </UsersSection>
        <SendSection>
          <Label color="#718EBF" weight={400} size="16px">
            Write Amount
          </Label>
          <AmountContainer>
            <Input placeholder="e.g. 505.5" />
            <SendButton>
              <Label weight={500} size="16px" color="#FFFFFF">
                Send
              </Label>
              <SendIcon src={send} alt="Send" />
            </SendButton>
          </AmountContainer>
        </SendSection>
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  width: 445px;
  height: 323px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 276px;
  gap: 29px;
  overflow: hidden;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UsersSection = styled.div`
  width: 394px;
  height: 127px;
  display: flex;
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
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
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
  width: 395px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  width: 265px;
  height: 100%;
  background-color: #edf1f7;
  display: flex;
  border-radius: 50px;
  align-items: center;
  overflow: hidden;
`;

const Input = styled.input`
  width: 110px;
  height: 90%;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 10px;
`;

const SendButton = styled.div`
  width: 125px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #232323;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
`;

const SendIcon = styled.img`
  width: 26px;
  height: 22.6px;
`;

const BadgeStyle = {
  boxShadow: '4px 4px 18px -2px #E7E4E8CC',
  cursor: 'pointer',
  bg: 'white',
};

export default QuickTransfer;
