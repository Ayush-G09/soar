import React, { memo, useEffect, useRef } from "react";
import Label from "./Label";
import taskFill from "../assets/task-fill.png";
import Home from "../assets/home.png";
import HomeS from "../assets/home (1).png";
import Transaction from "../assets/transaction.png";
import TransactionS from "../assets/transaction (1).png";
import Account from "../assets/user.png";
import AccountS from "../assets/user (1).png";
import Investment from "../assets/economic.png";
import InvestmentS from "../assets/economic (1).png";
import CreditCard from "../assets/credit-card.png";
import CreditCardS from "../assets/credit-card (1).png";
import Loan from "../assets/loan.png";
import LoanS from "../assets/loan (1).png";
import Service from "../assets/customer-support.png";
import ServiceS from "../assets/customer-support (1).png";
import Privilage from "../assets/econometrics.png";
import PrivilageS from "../assets/econometrics (1).png";
import Setting from "../assets/settings.png";
import SettingS from "../assets/settings (1).png";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SidebarItemType } from "../types";
import { breakpoints } from "../utils";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

type Props = {
  opened: boolean;
  closeSidebar: (e: boolean) => void;
};

const SidebarItems = [
  {
    id: "123",
    nImg: Home,
    sImg: HomeS,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: "124",
    nImg: Transaction,
    sImg: TransactionS,
    title: "Transactions",
    path: "/transactions",
  },
  {
    id: "125",
    nImg: Account,
    sImg: AccountS,
    title: "Accounts",
    path: "/accounts",
  },
  {
    id: "126",
    nImg: Investment,
    sImg: InvestmentS,
    title: "Investments",
    path: "/investments",
  },
  {
    id: "127",
    nImg: CreditCard,
    sImg: CreditCardS,
    title: "Credit Cards",
    path: "/credit-cards",
  },
  { id: "128", nImg: Loan, sImg: LoanS, title: "Loans", path: "/loans" },
  {
    id: "129",
    nImg: Service,
    sImg: ServiceS,
    title: "Services",
    path: "/services",
  },
  {
    id: "130",
    nImg: Privilage,
    sImg: PrivilageS,
    title: "My Privileges",
    path: "/my-previleges",
  },
  {
    id: "131",
    nImg: Setting,
    sImg: SettingS,
    title: "Settings",
    path: "/setting",
  },
] as SidebarItemType[];

const isActivePath = (currentPath: string, itemPath: string): boolean => {
  return currentPath === itemPath;
};

const SidebarItem = memo(({ item, navigate }: { item: SidebarItemType, navigate: (path: string) => void }) => {
  const location = useLocation();

  const active = isActivePath(location.pathname, item.path);

  return (
    <StyledSidebarItem
      onClick={() => navigate(item.path)}
      role="button"
      tabIndex={0}
      aria-label={`Navigate to ${item.title}`}
      aria-current={active ? "page" : undefined}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate(item.path);
        }
      }}
    >
      <StyledIcon src={active ? item.nImg : item.sImg} />
      <Label color={active ? "#232323" : "#b1b1b1"} weight={500} size="15px">
        {item.title}
      </Label>
    </StyledSidebarItem>
  );
});

function Sidebar({ opened, closeSidebar }: Props) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if(!isDesktop){
      closeSidebar(false);
    }
    navigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);
  return (
    <StyledSidebar
      ref={sidebarRef}
      initial={{ left: isDesktop ? 0 : -250 }}
      animate={{ left: opened ? 0 : isDesktop ? 0 : -250 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <StyledHeader>
        <StyledLogo src={taskFill} />
        <Label weight={700} size="25px" color="#343C6A">
          Soar Task
        </Label>
      </StyledHeader>
      {SidebarItems.map((item) => (
        <SidebarItem navigate={handleNavigate} key={item.id} item={item} />
      ))}
    </StyledSidebar>
  );
}

const StyledSidebar = styled(motion.div).attrs(() => ({
  role: "navigation",
  "aria-label": "Sidebar navigation",
}))`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #e6eff5;
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  left: -250px;

  @media (min-width: ${breakpoints.desktop}) {
    left: 0px;
    position: static;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-sizing: border-box;
`;

const StyledLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledSidebarItem = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding-left: 20%;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 0.8rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export default Sidebar;
