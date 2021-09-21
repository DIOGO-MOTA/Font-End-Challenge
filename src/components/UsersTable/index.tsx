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

}


const UserTable: React.FC = () => {
  const { users } = useList();

  const [displayUser, setdisplayUser] = useState<User>({} as User);
  const [displayModalOpen, setdisplayModalOpen] = useState(false);


  function toggleDisplayModal(): void {
    setdisplayModalOpen(!displayModalOpen);
  }

  function handleDisplayUser(user: User): void {
    setdisplayUser(user);
    toggleDisplayModal();
  }


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
          {users.map(user => (
            <tr key={user.login.uuid}>
              <td>{user.name.last}</td>
              <td>{user.gender}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(user.dob.date))}</td>
              <td>
              <button
              type="button"
              className="icon"
              onClick={() => handleDisplayUser(user)}
              data-testid={`display-user-${user.login.uuid}`}
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