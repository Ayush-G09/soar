import React from 'react'
import Label from '../../Label'
import ActivityChart from './ActivityChart'

function WeeklyActivity() {
  return (
    <div style={{width: '730px', height: '367px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Label weight={600} size='22px' color='#343C6A'>Weekly Activity</Label>
        <div style={{width: '100%', height: '322px', overflow: 'hidden', backgroundColor: 'white', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ActivityChart />
        </div>
    </div>
  )
}

export default WeeklyActivity