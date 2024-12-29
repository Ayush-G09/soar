import React from "react";
import styled, { CSSProperties } from "styled-components";

type Props = {
  children: React.ReactNode;
  size: string;
  weight: number;
  color: string;
  sx?: CSSProperties;
  click?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};

function Label({ children, size, weight, color, sx, click, onKeyDown }: Props) {
  return (
    <StyledLabel
      onClick={click}
      $size={size}
      $weight={weight}
      $color={color}
      style={sx}
      onKeyDown={onKeyDown}
      tabIndex={click || onKeyDown ? 0 : undefined}
    >
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled.div<{
  $size: string;
  $weight: number;
  $color: string;
}>`
  font-size: ${({ $size }) => $size};
  font-weight: ${({ $weight }) => $weight};
  color: ${({ $color }) => $color};
`;

export default Label;
