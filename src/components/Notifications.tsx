import {
  faCircleCheck,
  faExclamationCircle,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import Label from "./Label";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deleteCard } from "../store/notificationsSlice";

const modalRoot = document.getElementById("notifications-root");

function Notifications() {
  const notificationCards = useSelector(
    (state: RootState) => state.notifications.notificationCards
  );

  const dispatch = useDispatch();

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <NotificationsOverlay>
      {notificationCards.map((card) => (
        <StyledCard key={card.id} type={card.type}>
          <IconWrapper>
            <FontAwesomeIcon
              icon={card.type === "error" ? faExclamationCircle : faCircleCheck}
            />
          </IconWrapper>
          <StyledLabel
            size="1rem"
            weight={400}
            color={card.type === "error" ? "#a7222f" : "#4F7A11"}
          >
            {card.msg}
          </StyledLabel>
          <CloseButton onClick={() => dispatch(deleteCard(card.id))}>
            <FontAwesomeIcon icon={faX} />
          </CloseButton>
        </StyledCard>
      ))}
    </NotificationsOverlay>,
    modalRoot
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NotificationsOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  pointer-events: none;
  margin-top: 1rem;
  gap: 1rem;

  & > * {
    animation: ${fadeIn} 0.5s ease-out;
  }
`;

const StyledCard = styled.div<{ type: "error" | "success" }>`
  display: flex;
  max-width: 50%;
  min-width: 10%;
  background-color: ${(p) => (p.type === "error" ? "#f8c0bf" : "#C4EC94")};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  color: ${(p) => (p.type === "error" ? "#a7222f" : "#4F7A11")};
  border: ${(p) => `1px solid ${p.type === "error" ? "#a7222f" : "#4F7A11"}`};
  pointer-events: auto;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 1rem;
`;

const StyledLabel = styled(Label)`
  margin-right: 1rem;
`;

const CloseButton = styled.div`
  padding: 0.3rem;
  display: flex;
  align-items: flex-start;
  cursor: pointer;

  svg {
    font-size: 0.8rem;
  }
`;

export default Notifications;
