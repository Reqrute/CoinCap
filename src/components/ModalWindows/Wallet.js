import React, {useEffect} from 'react';
import { Modal as Window, ModalBody,ModalClose,ModalContent,ModalDialog,ModalFooter,ModalHeader,Btn } from './component';


export default function Wallet  ({ isVisible = false, onClose }){
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
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
          <h2>Wallet</h2>
          <ModalClose onClick={onClose}>
            &times;
          </ModalClose>
        </ModalHeader>
        <ModalBody className="modal-body">
          <ModalContent>
            <p>$$$$</p>
          </ModalContent>
        </ModalBody>
        <ModalFooter>
        <Btn onClick={onClose}>Cancel</Btn>
        </ModalFooter>
      </ModalDialog>
    </Window>
  );
};