import React from 'react'
import Label from '../../Label'
import ExpenseChart from './ExpenseChart'

function ExpenseStatistics() {
  return (
    <div style={{width: '350px', height: '367px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Label weight={600} size='22px' color='#343C6A'>Expense Statistics</Label>
        <div style={{width: '100%', height: '322px', overflow: 'hidden', backgroundColor: 'white', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ExpenseChart/>
        </div>
    </div>
  )
}

export default ExpenseStatistics