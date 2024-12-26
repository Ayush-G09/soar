import React from 'react'
import Label from '../components/Label'
import ChipCard from '../assets/Chip_Card.png'

function Dashboard() {
  return (
    <div style={{width: '100%', height: '100%', padding: '30px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}}>
      <div style={{width: '100%', height: '282px', display: 'flex'}}>
        <div style={{width: 'fit-content', height: '100%', display: 'flex', flexDirection: 'column'}}>
          <div style={{width: '100%', height: '47px', display: 'flex', justifyContent: 'space-between'}}>
            <Label color='#343C6A' size='22px' weight={600}>My Cards</Label>
            <Label sx={{cursor: 'pointer'}} color='#343C6A' size='15px' weight={600}>See All</Label>
          </div>
          <div style={{width: '100%', height: '235px', display: 'flex', gap: '30px'}}>
            <div style={{width: '350px', height: '100%', borderRadius: '25px', padding: '25px', boxSizing: 'border-box', background: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(91,90,111,1) 100%)'}}>
              <div style={{height: '38px', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Label color='#FFFFFF' size='12px' weight={400}>Balance</Label>
                  <Label color='#FFFFFF' size='18px' weight={600}>$5,756</Label>
                </div>
                <img src={ChipCard} style={{width: '35px', height: '35px'}} />
              </div>
            </div>
            <div style={{width: '350px', height: '100%', backgroundColor: 'white', borderRadius: '25px', border: '1px solid #DFEAF2'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard