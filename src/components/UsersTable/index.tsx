import React, { useState } from 'react';

import { useList } from '../../hooks/useList';
import ModalDisplayUser from '../ModalDisplayUser';
import { FiEye } from 'react-icons/fi';

import { Container } from './styles';

interface User {
  gender: string;
  name: { last: string; }
  dob: { date: string }
  login: {
    uuid: string
  }
  email: string;

}


interface IUser{
  img: string;
  gender: string;
  nameFirest:string;
  nameLast: string;
  email: string;
  id: string
}

const UserTable: React.FC = () => {
  const { users } = useList();

  const [displayUser, setdisplayUser] = useState<IUser>({} as IUser);
  const [displayModalOpen, setdisplayModalOpen] = useState(false);


  function toggleDisplayModal(): void {
    setdisplayModalOpen(!displayModalOpen);
  }

  function handleDisplayUser(user: IUser): void {
    setdisplayUser(user);
    toggleDisplayModal();
  }
 
  const user = users.map(user => {
    return {
      img: user.picture.large,
      gender: user.gender,
      nameFirest: user.name.first,
      nameLast: user.name.last,
      email: user.email,
      id: user.login.uuid,
    }
   
  })



  return (
    <Container>

      <ModalDisplayUser
        isOpen={displayModalOpen}
        setIsOpen={toggleDisplayModal}
        displayUser={displayUser}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>gender</th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map(user => (
            <tr key={user.id}>
              <td>{user.nameLast}</td>
              <td>{user.gender}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date())}</td>
              <td>
                <button
                  type="button"
                  className="icon"
                  onClick={() => handleDisplayUser(user)}
                  data-testid={`display-user-${user.id}`}
                >
                  <FiEye size={20} />
                </button>
              </td>
              <td>
              </td>
            </tr>

          ))}

        </tbody>
      </table>
    </Container>
  );
}

export default UserTable;