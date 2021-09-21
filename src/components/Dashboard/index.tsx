import React from 'react';

import UserTable from '../UsersTable';
import { Container } from './styles';


const Dashboard: React.FC = () => {

  return (
    <Container>
      <UserTable />
    </Container>
  );
}

export default Dashboard;