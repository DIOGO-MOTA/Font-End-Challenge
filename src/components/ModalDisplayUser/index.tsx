import React from 'react';

import Modal from '../Modal';


interface IUser {
  gender: string;
  name: {
    last: string;
  }
  dob: { date: string },
  login: {
    uuid: string
  }
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
      <h1>{displayUser.gender}</h1>
    </Modal>
  );
};

export default ModalDisplayUser;
