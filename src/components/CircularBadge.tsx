import styled, { CSSProperties } from "styled-components";

type Props = {
  bg: string;
  img: string;
  size?: string;
  icon?: string;
  sx?: CSSProperties;
  click?: () => void;
};

function CircularBadge({
  bg,
  img,
  size = "40px",
  icon = "20px",
  sx,
  click,
}: Props) {
  return (
    <StyledCircularBadge bg={bg} size={size} style={sx} onClick={click}>
      <img src={img} style={{ width: icon, height: icon }} />
    </StyledCircularBadge>
  );
}

const StyledCircularBadge = styled.div<{ bg: string; size?: string }>`
  background-color: ${(p) => p.bg};
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CircularBadge;
