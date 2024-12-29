import styled from "styled-components";

type Props = {
  bg: string;
  img: string;
  size?: string;
  iconSize?: string;
  sx?: React.CSSProperties;
  onClick?: () => void;
  role?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
};

function CircularBadge({
  bg,
  img,
  size = "40px",
  iconSize = "20px",
  sx,
  onClick,
  role,
  onKeyDown
}: Props) {
  return (
    <StyledCircularBadge $bg={bg} $size={size} style={sx} role={role} tabIndex={role ? 0 : undefined} onClick={onClick} onKeyDown={onKeyDown}>
      <StyledImage src={img} $iconSize={iconSize} />
    </StyledCircularBadge>
  );
}

const StyledCircularBadge = styled.div<{ $bg: string; $size: string }>`
  background-color: ${(p) => p.$bg};
  width: ${(p) => p.$size};
  height: ${(p) => p.$size};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledImage = styled.img<{ $iconSize: string }>`
  width: ${(p) => p.$iconSize};
  height: ${(p) => p.$iconSize};
`;

export default CircularBadge;
