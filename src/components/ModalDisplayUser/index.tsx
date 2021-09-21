import React from 'react';

import Modal from '../Modal';


interface IUser{
  img: string;
  gender: string;
  nameFirest:string;
  nameLast: string;
  email: string;
  id: string
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  displayUser: IUser;
}

const ModalDisplayUser: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  displayUser,
}) => {



  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
     <>
      
       <h1>{displayUser.gender}</h1>
       <h2> {displayUser.nameLast} </h2>
       <h2> {displayUser.id} </h2>
      
  
      </>
    </Modal>
  );
};

export default ModalDisplayUser;
