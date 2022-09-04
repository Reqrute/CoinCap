import styled from 'styled-components'

export const Coins = styled.section`
    max-width:1200px;
    margin: 1rem auto;
    padding: 0 1.25rem;
`

export const Table = styled.table`
    width:100%;
    text-align:center;
    border-collapse:collapse;
    
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

export const Next = styled.button`
    display:block;
    margin: 1rem auto;
    background-color: black;
    border:none;
    border-radius:0.3rem;
    font-family:inherit;
    font-size:1rem;
    color:white;
    outline:none; 
    padding:0.625rem 1.25rem;
`

