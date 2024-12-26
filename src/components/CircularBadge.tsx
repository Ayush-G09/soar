import React from 'react'
import styled from 'styled-components'

type Props = {
    bg: string;
    img: string;
    size?: string 
}

function CircularBadge({bg, img, size = '40px'}: Props) {
  return (
    <StyledCircularBadge bg={bg} size={size}>
        <img src={img} style={{width: '20px', height: '20px'}}/>
    </StyledCircularBadge>
  )
};

const StyledCircularBadge = styled.div<{bg: string, size?: string}>`
background-color: ${(p) => p.bg};
width: ${(p) => p.size};
height: ${(p) => p.size};
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`;

export default CircularBadge