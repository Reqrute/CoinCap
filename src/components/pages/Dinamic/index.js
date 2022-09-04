import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Dinamic = () => {
  let { id } = useParams();

  const [crypto, setCrypto] = useState([]);
  
  useEffect(()=>{
    const fetchCrypto = async() =>{
        const res = await fetch(`https:api.coincap.io/v2/assets/${id}`);
        const data = await res.json();
        setCrypto(data.data)
    }
        fetchCrypto(); 
    },[id]
)


  return (
    <div>
    <h1 >name = {crypto.name}</h1>
    <h2>symbol = {crypto.symbol}</h2>
    <h2>rank = {crypto.rank}</h2> 
    <h2>supply = {crypto.supply}</h2>
    <h2>maxSupply = {crypto.maxSupply}</h2> 
    <h2> marketCapUsd = {crypto.marketCapUsd}</h2>
    <h2>volumeUsd24Hr = {crypto.volumeUsd24Hr}</h2>
    <h2>priceUsd = {crypto.priceUsd}</h2> 
    <h2>changePercent24Hr = {crypto.changePercent24Hr}</h2>
    <h2> vwap24Hr ={crypto.vwap24Hr}</h2>
    </div>
  );
};

export default Dinamic;


