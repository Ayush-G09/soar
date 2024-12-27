import React from 'react'
import Label from '../../Label'
import BalanceChart from './BalanceChart'

function BalanceHistory() {
  return (
    <div style={{width: '635px', height: '323px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Label weight={600} size='22px' color='#343C6A'>Balance History</Label>
        <div style={{width: '100%', height: '276px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '25px'}}>
            <BalanceChart/>
        </div>
    </div>
  )
}

export default BalanceHistory