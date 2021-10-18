import styled from 'styled-components';

export const Container = styled.header`
  width: auto;
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  color: #fff;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

a {
   color: #fff;
   text-decoration: none;
   font-size: 2rem;
  }

  
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

`;