import React from 'react'
import MyCards from '../components/MyCards/MyCards'

function Dashboard() {
  return (
    <div style={{width: '100%', height: '100%', padding: '30px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
      <div style={{width: '100%', display: 'flex'}}>
        <MyCards/>
      </div>
    </div>
  )
}

export default Dashboard