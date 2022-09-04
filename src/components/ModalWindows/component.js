import styled from 'styled-components'

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalDialog = styled.div`
    width: 100%;
    max-width: 550px;
    background: white;
    position: relative;
    margin: 0 20px;
    max-height: calc(100vh - 40px);
    text-align: left;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const ModalHeader = styled.div`
   display: flex;
    align-items: center;
    padding: 1rem;  
    border-bottom: 1px solid #dbdbdb;
    justify-content: space-between;
`

export const ModalFooter = styled.div`
   display: flex;
    align-items: center;
    padding: 1rem;
    border-top: 1px solid #dbdbdb;
    justify-content: flex-end;
`

export const ModalClose = styled.span`   
cursor: pointer;
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;


`

export const ModalBody = styled.div`
overflow: auto;
`

export const ModalContent = styled.div`
padding: 1rem;
`

export const Btn = styled.button`
    display:block;
    margin-right: 5px;
    border:0.5px solid;
    border-radius:0.3rem;
    font-family:inherit;
    font-size:1rem;
    padding:10px;
`


  
