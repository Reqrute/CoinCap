import React, {useEffect,useState} from 'react';
import { Modal as Window, ModalBody,ModalClose,ModalContent,ModalDialog,ModalFooter,ModalHeader,Btn } from './component';
import { addCrypto } from '../../redux/action';
import { useDispatch } from 'react-redux';


export default function AddModal  ({ isVisible = false, onClose , name }){
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        setValue('');
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <Window className="modal" onClick={onClose}>
      <ModalDialog onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h3>Add Crypto {name}</h3>
          <ModalClose onClick={onClose}>
            &times;
          </ModalClose>
        </ModalHeader>
        <ModalBody className="modal-body">
          <ModalContent>
          <p style={{marginBottom:'5px'}}>Enter quantity</p>
          <input type = "number"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
           {value <= 0 || !!value === false ? (
            <p style={{color:'red', marginTop: '5px'}}>Only positive number or float number</p>
          ) : null}
          </ModalContent>
        </ModalBody>
        <ModalFooter>
        <Btn onClick={() => {onClose(); setValue('');}}>Cancel</Btn>
        {value <= 0 || !!value === false ? (
          <Btn disabled>Add</Btn>
          ) : (<Btn onClick={() => {console.log(value);
          dispatch(addCrypto({
            id : name,
            value : value
          }))}}>Add</Btn>)}
        
        </ModalFooter>
      </ModalDialog>
    </Window>
  );
};