import React, { useState } from 'react';

import { useList } from '../../hooks/useList';
import ModalDisplayUser from '../ModalDisplayUser';
import { RiSearchLine } from "react-icons/ri";

import { FiEye } from 'react-icons/fi';


import { Container, SearchContaine } from './styles';

interface IUser{
  img: string;
  nameFirest:string;
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

const UserTable: React.FC = () => {
  const { users, handleFilterValue } = useList();

  const [displayUser, setdisplayUser] = useState<IUser>({} as IUser);
  const [displayModalOpen, setdisplayModalOpen] = useState(false);
  
  const [searchInput, setSearchInput] = useState("");
  

  function toggleDisplayModal(): void {
    setdisplayModalOpen(!displayModalOpen);
  }

  function handleDisplayUser(user: IUser): void {
    setdisplayUser(user);
    toggleDisplayModal();
  }

  
  const userList = users.map(user => {
    return {
      img: user.picture.large,
      gender: user.gender,
      nameFirest: user.name.first,
      nameLast: user.name.last,
      email: user.email,
      id: user.login.uuid,
      dob: new Intl.DateTimeFormat('pt-BR').format(new Date(user.dob.date)),
      phone: user.phone,
      streetNumber: user.location.street.number,
      streetName: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
    }
  })


  return (
    <Container>
       <SearchContaine>
        < input
          type="text"
          placeholder="Buscar Paciente"
          onChange={(e) => {
            setSearchInput(e.target.value.toLowerCase());
          }} />
        <RiSearchLine fontSize="30" onClick={() => handleFilterValue(searchInput)} />
      </SearchContaine>

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
              <td>{user.dob}</td>
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