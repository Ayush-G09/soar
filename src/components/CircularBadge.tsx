import React from 'react'
import styled from 'styled-components'

type Props = {
    bg: string;
    img: string;
}

function CircularBadge({bg, img}: Props) {
  return (
    <StyledCircularBadge bg={bg}>
        <img src={img} style={{width: '20px', height: '20px'}}/>
    </StyledCircularBadge>
  )
};

const StyledCircularBadge = styled.div<{bg: string}>`
background-color: ${(p) => p.bg};
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`;

export default CircularBadge