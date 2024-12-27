import Label from './Label';
import taskFill from '../assets/task-fill.png';
import Home from '../assets/home.png';
import HomeS from '../assets/home (1).png';
import Transaction from '../assets/transaction.png';
import TransactionS from '../assets/transaction (1).png';
import Account from '../assets/user.png';
import AccountS from '../assets/user (1).png';
import Investment from '../assets/economic.png';
import InvestmentS from '../assets/economic (1).png';
import CreditCard from '../assets/credit-card.png';
import CreditCardS from '../assets/credit-card (1).png';
import Loan from '../assets/loan.png';
import LoanS from '../assets/loan (1).png';
import Service from '../assets/customer-support.png';
import ServiceS from '../assets/customer-support (1).png';
import Privilage from '../assets/econometrics.png';
import PrivilageS from '../assets/econometrics (1).png';
import Setting from '../assets/settings.png';
import SettingS from '../assets/settings (1).png';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SidebarItems = [
  {
    nImg: Home,
    sImg: HomeS,
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    nImg: Transaction,
    sImg: TransactionS,
    title: 'Transactions',
    path: '/transactions',
  },
  {
    nImg: Account,
    sImg: AccountS,
    title: 'Accounts',
    path: '/accounts',
  },
  {
    nImg: Investment,
    sImg: InvestmentS,
    title: 'Investments',
    path: '/investments',
  },
  {
    nImg: CreditCard,
    sImg: CreditCardS,
    title: 'Credit Cards',
    path: '/credit-cards',
  },
  {
    nImg: Loan,
    sImg: LoanS,
    title: 'Loans',
    path: '/loans',
  },
  {
    nImg: Service,
    sImg: ServiceS,
    title: 'Services',
    path: '/services',
  },
  {
    nImg: Privilage,
    sImg: PrivilageS,
    title: 'My Privileges',
    path: '/my-previleges',
  },
  {
    nImg: Setting,
    sImg: SettingS,
    title: 'Setting',
    path: '/setting',
  },
];

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledSidebar>
      <StyledHeader>
        <StyledLogo src={taskFill} />
        <Label weight={700} size="25px" color="#343C6A">
          Soar Task
        </Label>
      </StyledHeader>
      {SidebarItems.map((item, index) => (
        <StyledSidebarItem
          key={`${item.title}${index}`}
          onClick={() => navigate(item.path)}
        >
          <StyledIcon
            src={location.pathname === item.path ? item.nImg : item.sImg}
          />
          <Label
            color={location.pathname === item.path ? '#232323' : '#b1b1b1'}
            weight={500}
            size="15px"
          >
            {item.title}
          </Label>
        </StyledSidebarItem>
      ))}
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #e6eff5;
  box-sizing: border-box;
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
