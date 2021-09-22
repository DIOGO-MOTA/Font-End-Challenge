import React, { useState } from 'react';

import { useList } from '../../hooks/useList';
import ModalDisplayUser from '../ModalDisplayUser';
import { FiEye } from 'react-icons/fi';

import { Container } from './styles';

interface IUser{
  img: string;
  nameFirest:string;
  nameLast: string;
  email: string;
  gender: string;
  dob: string;
  id: string;
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
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

  
  const userList = users.map(user => {
    return {
      img: user.picture.thumbnail,
      gender: user.gender,
      nameFirest: user.name.first,
      nameLast: user.name.last,
      email: user.email,
      id: user.login.uuid,
      dob: user.dob.date,
      streetNumber: user.location.street.number,
      streetName: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
    }
  })

  console.log(users)


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
          {userList.map(user => (
            <tr key={user.id}>
              <td>{user.nameFirest}</td>
              <td>{user.gender}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(user.dob))}</td>
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