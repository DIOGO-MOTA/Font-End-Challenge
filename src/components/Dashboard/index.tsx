import React from 'react';
import Header from '../Header';

import UserTable from '../UsersTable';
import { Container } from './styles';


const Dashboard: React.FC = () => {

  return (
    <>
     <Header />
      <Container>
        <UserTable />
      </Container>
    </>
  );
}

export default Dashboard;