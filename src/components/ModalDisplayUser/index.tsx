import React from 'react';

import Modal from '../Modal';
import { Container } from './styles';


interface IUser {
  img: string;
  nameFirest: string;
  nameLast: string;
  email: string;
  gender: string;
  dob: string;
  phone: string,
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
  id: string;
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

      <Container>
        <div><img src={displayUser.img} alt={displayUser.nameFirest} /></div>
        <h1>{`${displayUser.nameFirest} ${displayUser.nameLast}`}</h1>
        <ul>
          <li><strong>E-mail:</strong> <span> {displayUser.email}</span></li>
          <li><strong>Gender:</strong> <span>{displayUser.gender}</span></li>
          <li><strong>Date of birth:</strong> <span>{displayUser.dob}</span></li>
          <li><strong>Phone:</strong> <span>{displayUser.phone}</span></li>
          <li><strong>Street Number:</strong> <span>{displayUser.streetNumber}</span></li>
          <li><strong>Street Name:</strong> <span>{displayUser.streetName}</span> </li>
          <li><strong>City:</strong> <span> {displayUser.city}</span></li>
          <li><strong>State:</strong> <span> {displayUser.state}</span></li>
          <li><strong>Country:</strong> <span> {displayUser.country}</span></li>
          <li><strong>Postcode:</strong> <span> {displayUser.postcode}</span></li>
          <li><strong>Id:</strong> <span> {displayUser.id}</span></li>
        </ul>

      </Container>

    </Modal>

  );
};

export default ModalDisplayUser;
