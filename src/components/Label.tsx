import React from "react";
import styled, { CSSProperties } from "styled-components";

type Props = {
  children: React.ReactNode;
  weight: number;
  color: string;
  sx?: CSSProperties;
  click?: () => void;
};

function Label({ children, weight, color, sx, click }: Props) {
  return (
    <StyledLabel
      onClick={click}
      $weight={weight}
      $color={color}
      style={sx}
    >
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled.div<{
  $weight: number; 
  $color: string;
}>`
  font-weight: ${({ $weight }) => $weight};
  color: ${({ $color }) => $color};
`;

export default Label;
