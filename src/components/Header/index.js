import React from 'react'

import {
    Header as AppHeader,
    Top,
} from './/component'

import { useEffect, useState } from 'react'




export default function Header() {

 const [coins, setCoins] = useState([]);

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

<p key = {id}>
    {rank}.
    {name} &nbsp;
     ${parseFloat(priceUsd).toFixed(2)}
</p>
))}
      </Top>

        <button>
            Портфель
        </button>

    </AppHeader>
  )
}