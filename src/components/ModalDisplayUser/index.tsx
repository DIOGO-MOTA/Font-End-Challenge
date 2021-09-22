import React from 'react';

import Modal from '../Modal';


interface IUser{
  img: string;
  gender: string;
  nameFirest:string;
  nameLast: string;
  email: string;
  id: string;
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
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
       <div><img src={displayUser.img}/></div>
       <ul>
       <li>Name: {`${displayUser.nameFirest} ${displayUser.nameLast}`} </li>
       <li>E-mail: {displayUser.email}</li>
       <li>Gender: {displayUser.gender}</li>
       <li>street Number: {displayUser.streetNumber} </li>
       <li>street Name: {displayUser.streetName} </li>
       <li>City: {displayUser.city} </li>
       <li> {displayUser.id} </li>
       </ul>
      
  
      </>
    </Modal>
  );
};

export default ModalDisplayUser;
