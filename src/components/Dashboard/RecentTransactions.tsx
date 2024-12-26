import React from 'react'
import Label from '../Label'
import CircularBadge from '../CircularBadge'
import Deposit from '../../assets/deposit.png'
import Dollar from '../../assets/dollar.png'
import Paypal from '../../assets/paypal.png'
import { TransactionType } from '../../types'

const transactionsData = [
    {
        id: '4568',
        badgeType: 'deposit',
        title: 'Deposit from my Card',
        date: '28 January 2021',
        amount: '-$850',
    },
    {
        id: '4569',
        badgeType: 'paypal',
        title: 'Deposit Paypal',
        date: '25 January 2021',
        amount: '+$2,500',
    },
    {
        id: '4570',
        badgeType: 'dollar',
        title: 'Jemi Wilson',
        date: '21 January 2021',
        amount: '+$5,400',
    },
] as TransactionType[];

function RecentTransactions() {
  return (
    <div style={{width: '350px', height: '282px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Label weight={600} size='22px' color='#343C6A'>Recent Transaction</Label>
        <div style={{width: '100%', gap: '1rem', height: '235px', display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '25px', alignItems: 'center', justifyContent: 'center'}}>
            {transactionsData.map((data) => (<div key={data.id} style={{display: 'flex', alignItems: 'center', width: '301px', gap: '1rem'}}>
                {data.badgeType === 'deposit' ? <CircularBadge size='50px' bg={'#FFF5D9'} img={Deposit}/> : data.badgeType === 'paypal' ? <CircularBadge size='50px' bg={'#E7EDFF'} img={Paypal}/> : <CircularBadge size='50px' bg={'#DCFAF8'} img={Dollar}/>}
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Label weight={500} size='16px' color='#232323'>{data.title}</Label>
                    <Label weight={400} size='15px' color='#718EBF'>{data.date}</Label>
                </div>
                <Label weight={500} size='16px' color={data.amount.includes('-') ? '#FF4B4A' : '#41D4A8'} sx={{marginLeft: 'auto'}}>{data.amount}</Label>
            </div>))}
        </div>
    </div>
  )
}

export default RecentTransactions