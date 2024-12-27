import React, { useEffect, useRef, useState } from 'react'
import Label from '../Label'
import user1 from '../../assets/user1.svg'
import user2 from '../../assets/user2.svg'
import user3 from '../../assets/user3.png'
import styled from 'styled-components'
import { UserType } from '../../types'
import CircularBadge from '../CircularBadge'
import rightArrow from '../../assets/right-arrow.png'
import leftArrow from '../../assets/left-arrow.png'
import send from '../../assets/Send.png'

const UsersData = [
    {
        id: '7894',
        name: 'Livia Bator',
        role: 'CEO',
        img: user1,
    },
    {
        id: '7895',
        name: 'Randy Press',
        role: 'Director',
        img: user3,
    },
    {
        id: '7896',
        name: 'Workman',
        role: 'Designer',
        img: user2,
    },
    {
        id: '7897',
        name: 'Alex voo',
        role: 'Workman',
        img: user1,
    },
    {
        id: '7898',
        name: 'Jhon Cena',
        role: 'Workman',
        img: user3,
    }
] as UserType[];

function QuickTransfer() {
    const [selected, setSelected] = useState<string>('');
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isScrollStart, setIsScrollStart] = useState(true);
    const [isScrollEnd, setIsScrollEnd] = useState(false);
  
    const handleScrollRight = () => {
      if (containerRef.current) {
        const childWidth = containerRef.current.firstChild
          ? (containerRef.current.firstChild as HTMLElement).offsetWidth
          : 0; // Get the width of one child
        containerRef.current.scrollBy({
          left: childWidth + 12,
          behavior: 'smooth',
        });
      }
    };
  
    const handleScrollLeft = () => {
      if (containerRef.current) {
        const childWidth = containerRef.current.firstChild
          ? (containerRef.current.firstChild as HTMLElement).offsetWidth
          : 0;
        containerRef.current.scrollBy({
          left: -(childWidth + 12), 
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
  
  return (
    <div style={{width: '445px', height: '323px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Label weight={600} size='22px' color='#343C6A'>Quick Transfer</Label>
        <div style={{width: '100%', height: '276px', gap: '29px', overflow: 'hidden', backgroundColor: 'white', borderRadius: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '394px', height: '127px', display: 'flex'}}>
                <StyledUserContainer ref={containerRef}>
                    {UsersData.map((user) => (<div onClick={() => setSelected(user.id)} key={user.id} style={{minWidth: '30%', height: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>
                        <img src={user.img} style={{width: '70px', height: '70px', marginBottom: '10px'}}/>
                        <Label weight={selected === user.id ? 700 : 400} size='16px' color='#232323'>{user.name}</Label>
                        <Label weight={selected === user.id ? 700 : 400} size='15px' color='#718EBF'>{selected === user.id ? user.role.toUpperCase() : user.role}</Label>
                    </div>))}
                </StyledUserContainer>
                <div style={{width: '20%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
                    {!isScrollEnd && <CircularBadge click={handleScrollRight} sx={{boxShadow: '4px 4px 18px -2px #E7E4E8CC', cursor: 'pointer'}} bg={'white'} img={rightArrow} size='50px'/>}
                    {!isScrollStart && <CircularBadge click={handleScrollLeft} sx={{boxShadow: '4px 4px 18px -2px #E7E4E8CC', cursor: 'pointer'}} bg={'white'} img={leftArrow} size='50px'/>}
                </div>
            </div>
            <div style={{width: '394px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Label color='#718EBF' weight={400} size='16px'>Write Amount</Label>
                <div style={{width: '265px', height: '100%', backgroundColor: '#EDF1F7', display: 'flex', borderRadius: '50px', alignItems: 'center', overflow: 'hidden'}}>
                    <input placeholder='e.g. 505.5' style={{width: '110px', height: '90%', outline: 'none', border: 'none', backgroundColor: 'transparent', padding: '0 15px'}} />
                    <div style={{width: '125px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', backgroundColor: '#232323', borderRadius: '50px', cursor: 'pointer', boxShadow: '4px 4px 18px -2px #E7E4E8CC'}}>
                        <Label weight={500} size='16px' color='#FFFFFF'>Send</Label>
                        <img src={send} style={{width: '26px', height: '22.6px'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

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


export default QuickTransfer;