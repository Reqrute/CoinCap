import styled from 'styled-components'

export const Coins = styled.section`
    max-width:900px;
    margin: 1rem auto;
    padding: 0 1.25rem;
`

export const Table = styled.table`
    width:100%;
    text-align:center;
    border-collapse:collapse;
    
     th, td {
        border-right: 1px solid ;
        border-left: 0.5px solid ;
    }

    thead{
    background-color: black;
    color:#fff;
    font-size: 1rem;
    }

    thead tr th{
    padding: 1rem;
    }

    tbody tr td{
    padding: 1rem;
    }

    tbody tr:nth-child(even){
        background-color:#e5e5e5;
    }
    
`

