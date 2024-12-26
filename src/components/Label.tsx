import React from 'react'
import { CSSProperties } from 'styled-components';

type Props = {
    children: React.ReactNode;
    size: string;
    weight: number;
    color: string;
    sx?: CSSProperties;
}

function Label({children, size, weight, color, sx}: Props) {
  return (
    <div style={{fontSize: size, fontWeight: weight, color: color, ...sx}}>{children}</div>
  )
}

export default Label