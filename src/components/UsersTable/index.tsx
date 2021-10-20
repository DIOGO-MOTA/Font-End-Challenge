import React, { useEffect, useState } from 'react';

import { useList, User } from '../../hooks/useList';
import ModalDisplayUser from '../ModalDisplayUser';
import { RiSearchLine } from "react-icons/ri";

import Paginator from 'react-hooks-paginator';
import { FiEye } from 'react-icons/fi';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import { Container, SearchContaine } from './styles';


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

const UserTable: React.FC = () => {
  const { users, handleFilterValue } = useList();


  const pageLimit = 10;
  const [usersData, setUsersData] = useState<User[]>([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [displayUser, setdisplayUser] = useState<IUser>({} as IUser);
  const [displayModalOpen, setdisplayModalOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");



  useEffect(() => {
    setUsersData(users.slice(offset, offset + pageLimit));
  }, [offset, users]);

  function toggleDisplayModal(): void {
    setdisplayModalOpen(!displayModalOpen);
  }

  function handleDisplayUser(user: IUser): void {
    setdisplayUser(user);
    toggleDisplayModal();
  }


  const userList = usersData.map(user => {
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

      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>gender</Th>
            <Th>Birth</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userList.map(user => (
            <Tr key={user.id}>
              <Td>{user.nameFirest}</Td>
              <Td>{user.gender}</Td>
              <Td>{user.dob}</Td>
              <Td>
                <button
                  type="button"
                  className="icon"
                  onClick={() => handleDisplayUser(user)}
                  data-testid={`display-user-${user.id}`}
                >
                  <FiEye size={20} />
                </button>
              </Td>
            </Tr>
          ))}

        </Tbody>
      </Table>


      <Paginator
        totalRecords={users.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </Container>


  );
}

export default UserTable;