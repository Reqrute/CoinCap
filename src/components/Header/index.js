import React from 'react'

import {
    Header as AppHeader,
    Top,
} from './/component'

import { useEffect, useState } from 'react'
import Wallet from '../ModalWindows/Wallet';
import store from '../../redux/store';




export default function Header() {

 const [coins, setCoins] = useState([]);
 const [isModal, setModal] = useState(false);


useEffect(()=>{
    const fetchCoins = async() =>{
        const res = await fetch('https:api.coincap.io/v2/assets?limit=3');
        const data = await res.json();
        setCoins(data.data)
    }
        fetchCoins(); 
    },[]
) ;

return (
    <AppHeader>
      <Top>
      {coins.map(({id,name, rank, priceUsd})=> (

     <span key = {id}
     style={{padding:'1rem'}}>
    {rank}.
    {name} &nbsp;
     ${parseFloat(priceUsd).toFixed(2)}
     </span>
))}
      </Top>

        <button onClick={() => setModal(true)}
        style={{margin:'1rem'}}
        > 
            Wallet
        </button>

        <button onClick={() =>console.log(store.getState()) }
        style={{margin:'1rem'}}
        > 
            adada
        </button>

        <Wallet
        isVisible={isModal}
        onClose={() => setModal(false)}
      />
    </AppHeader>
  )
}