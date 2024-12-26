import React from 'react'
import { CSSProperties } from 'styled-components';

type Props = {
    children: React.ReactNode;
    size: string;
    weight: number;
    color: string;
    sx?: CSSProperties;
    click?: () => void;
}

function Label({children, size, weight, color, sx, click}: Props) {
  return (
    <div onClick={click} style={{fontSize: size, fontWeight: weight, color: color, ...sx}}>{children}</div>
  )
}

export default Label