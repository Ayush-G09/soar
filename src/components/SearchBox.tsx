import React from 'react'
import magnifyingGlass from '../assets/magnifying-glass.png'

function SearchBox() {
  return (
    <div style={{display: 'flex', alignItems: 'center', background: '#F5F7FA', height: '40px', borderRadius: '40px', width: '255px', overflow: 'hidden'}}>
            <div style={{width: '15%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={magnifyingGlass} style={{width: '15px', height: '15px'}}/>
            </div>
            <input type='text' placeholder='Search for something' style={{width: '75%', height: '95%', border: 'none', outline: 'none', backgroundColor: 'transparent'}} />
        </div>
  )
}

export default SearchBox