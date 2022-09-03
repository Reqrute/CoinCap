import { Table, Coins,} from './component'
import { useEffect, useState } from 'react'
import AddModal from '../../ModalWindows/AddModal'


export default function Home() {

    const [coins, setCoins] = useState([]);
    const [isModal, setModal] = useState(false);

    useEffect(()=>{
        const fetchCoins = async() =>{
            const res = await fetch('https:api.coincap.io/v2/assets?limit=20');
            const data = await res.json();
            setCoins(data.data)
        }
            fetchCoins(); 
        },[]
    )

  return (
    <Coins>
        <Table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>VWAP(24Hr)</th>
                    <th>Supply</th>
                    <th>Volume(24Hr)</th>
                    <th>Change(24Hr)</th>
                    <th>Add</th>
                </tr>
            </thead>

        <tbody>
            {coins.map(({id,name, rank, priceUsd,marketCapUsd,vwap24Hr,supply,volumeUsd24Hr,changePercent24Hr})=> (

                <tr key = {id}>
                    <td>{rank}</td>
                    <td>{name}</td>
                    <td>${parseFloat(priceUsd).toFixed(2)}</td>
                    <td>${parseFloat(marketCapUsd/1000000).toFixed(2)}m</td>
                    <td>${parseFloat(vwap24Hr).toFixed(2)}</td> 
                    <td>{parseFloat(supply/1000000).toFixed(2)}m</td>
                    <td>${parseFloat(volumeUsd24Hr/1000000).toFixed(2)}m</td>
                    <td>{parseFloat(changePercent24Hr).toFixed(2)}%</td>
                    <td><button onClick={() => setModal(true)}>+</button></td>

                </tr>
            ))}
        </tbody>

        </Table>
        <AddModal
        isVisible={isModal}
        onClose={() => setModal(false)}
      />
    </Coins>
  )
}
