import React, { useState } from 'react'
import CardChip from '../../assets/Chip_Card.png'
import CardChip2 from '../../assets/Chip_Card (1).png'
import CardLogo from '../../assets/Group 17.png'
import CardLogo2 from '../../assets/Group 17 (1).png'
import { motion } from 'framer-motion';
import { CreditCardType } from '../../types'
import Label from '../Label'

const CardsData = [
  {
    id: '753689',
    type: 'black',
    balance: 5756,
    holder: 'Eddy Cusuma',
    valid: '12/22',
    cardNo: '3778 **** **** 1234',
  },
  {
    id: '951258',
    type: 'white',
    balance: 4556,
    holder: 'Elf Cusuma',
    valid: '12/26',
    cardNo: '3778 **** **** 1234',
  },
  {
    id: '156248',
    type: 'black',
    balance: 5756,
    holder: 'Eddy Cusuma',
    valid: '12/22',
    cardNo: '3778 **** **** 1234',
  },
] as CreditCardType[];

function MyCards() {

  const [seeAll, setSeeAll] = useState<boolean>(false);
  
  return (
    <motion.div style={{width: '730px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}} initial={{ height: 282 }} animate={{ height: seeAll ? 'auto' : 282 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
              <div style={{width: '100%', minHeight: '47px', display: 'flex', justifyContent: 'space-between'}}>
                <Label color='#343C6A' size='22px' weight={600}>My Cards</Label>
                <Label click={() => setSeeAll(!seeAll)} sx={{cursor: 'pointer'}} color='#343C6A' size='15px' weight={600}>{seeAll ? 'Show Less' : 'See All'}</Label>
              </div>
              <div style={{
  width: '100%', 
  height: '100%', 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
  gap: '30px', 
  overflow: 'hidden'
}}>
  {CardsData.map((card) => (
    <div 
      key={card.id} 
      style={{
        minWidth: '350px', 
        height: '235px', 
        borderRadius: '25px', 
        boxSizing: 'border-box', 
        background: card.type === 'black' 
          ? 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(91,90,111,1) 100%)' 
          : 'white', 
        border: card.type === 'black' ? 'none' : '1px solid #DFEAF2'
      }}
    >
      <div style={{
        width: '100%', 
        height: '165px', 
        padding: '25px', 
        boxSizing: 'border-box', 
        gap: '30px', 
        display: 'flex', 
        flexDirection: 'column'
      }}>
        <div style={{
          height: '38px', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Label color={card.type === 'black' ? '#FFFFFF' : '#718EBF'} size='12px' weight={400}>Balance</Label>
            <Label color={card.type === 'black' ? '#FFFFFF' : '#343C6A'} size='18px' weight={600}>${card.balance}</Label>
          </div>
          <img 
            src={card.type === 'black' ? CardChip : CardChip2} 
            style={{ width: '35px', height: '35px' }} 
          />
        </div>
        <div style={{
          width: '100%', 
          height: '35px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '67px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', height: '100%' }}>
            <Label weight={400} size='12px' color={card.type === 'black' ? 'rgba(255, 255, 255, 0.7)' : '#718EBF'}>CARD HOLDER</Label>
            <Label weight={600} size='15px' color={card.type === 'black' ? 'white' : '#343C6A'}>{card.holder}</Label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', height: '100%' }}>
            <Label weight={400} size='12px' color={card.type === 'black' ? 'rgba(255, 255, 255, 0.7)' : '#718EBF'}>VALID THRU</Label>
            <Label weight={600} size='15px' color={card.type === 'black' ? 'white' : '#343C6A'}>{card.valid}</Label>
          </div>
        </div>
      </div>
      <div style={{
        width: '100%', 
        height: '70px', 
        background: card.type === 'black' 
          ? 'linear-gradient(180deg, rgba(225, 225, 225, 0.15) 0%, rgba(225, 225, 225, 0) 100%)' 
          : 'transparent', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderTop: card.type === 'black' ? 'none' : '1px solid rgba(223, 234, 242, 1)'
      }}>
        <div style={{
          display: 'flex', 
          alignItems: 'center', 
          height: '30px', 
          width: '300px', 
          justifyContent: 'space-between'
        }}>
          <Label size='22px' weight={600} color={card.type === 'black' ? 'white' : '#343C6A'}>{card.cardNo}</Label>
          <img 
            src={card.type === 'black' ? CardLogo : CardLogo2} 
            style={{ width: '44px', height: '30px' }}
          />
        </div>
      </div>
    </div>
  ))}
</div>

            </motion.div>
  )
}

export default MyCards