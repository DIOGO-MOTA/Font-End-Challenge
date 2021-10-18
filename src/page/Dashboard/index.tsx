import React from 'react';
import Header from '../../components/Header';
import UserTable from '../../components/UsersTable';

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