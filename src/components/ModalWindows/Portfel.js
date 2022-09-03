import React, {useEffect} from 'react';
import { Modal as Window, ModalBody,ModalClose,ModalContent,ModalDialog,ModalFooter,ModalHeader } from './component';


export default function Portfel  ({ isVisible = false, onClose }){
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
          <h3>Check profile</h3>
          <ModalClose onClick={onClose}>
            &times;
          </ModalClose>
        </ModalHeader>
        <ModalBody className="modal-body">
          <ModalContent>
            <p>adauhfauh</p>
          </ModalContent>
        </ModalBody>
        <ModalFooter><button onClick={onClose}>Cancel</button></ModalFooter>
      </ModalDialog>
    </Window>
  );
};