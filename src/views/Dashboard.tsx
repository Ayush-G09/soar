import React from 'react'
import MyCards from '../components/Dashboard/MyCards/MyCards'
import RecentTransactions from '../components/Dashboard/RecentTransactions'

function Dashboard() {
  return (
    <div style={{width: '100%', height: '100%', padding: '30px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
      <div style={{width: '100%', display: 'flex', gap: '30px'}}>
        <MyCards/>
        <RecentTransactions/>
      </div>
    </div>
  )
}

export default Dashboard