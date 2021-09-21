import React from 'react';

import { Container, Content } from './styles';


const Header: React.FC = () => {

  return (
    <Container>
      <Content>
        <h1>Company</h1>
        <img src='https://avatars.githubusercontent.com/u/53905314?s=400&u=e725d59a2b38aff6ed2e6a66b6e64ee507126347&v=4' alt="" />
      </Content>
   </Container>
  );
}

export default Header;