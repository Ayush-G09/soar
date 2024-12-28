import React from 'react'
import Label from '../Label'

type Props = {
    title: string;
    type: 'text' | 'password';
}

function InputField({title, type}: Props) {
  return (
    <div style={{ width: '418px', height: '80px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', justifyContent: 'space-between'}}>
        <Label size='16px' weight={400} color='#232323'>{title}</Label>
        <input type={type} style={{width: '98%', height: '50px', backgroundColor: 'white', border: '1px solid #DFEAF2', outline: 'none', borderRadius: '15px', fontWeight: 400, fontSize: '14px', color: '#718EBF'}}/>
    </div>
  )
}

export default InputField