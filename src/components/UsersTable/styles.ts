import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

  

    tr {
      border: 0;
      margin-top: 10px;
     
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
       color: var(--text-title);
      }
      
      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
    
    button {
     font-size: 1rem;
     color: #FFF;
     background: var(--blue-light);
     border: 0;
     padding: 0 2rem;
     border-radius: 0.25rem;
     height: 3rem;

     transition: filter 0.2s;

     &:hover {
       filter: brightness(0.9);
     }
    }

    
  }

`;

export const SearchContaine = styled.label`
    display: flex;
    width: 400px;
    align-self: center;
    
    background: #fff;
    margin-top: -140px;
    border-radius: 8px;
    padding: 18px 24px;
    font-size: 16px;
    border: 0;



    svg {
      color: #b7b7cc;
      transition: filter 0.2s;
      cursor: pointer;

      &:hover {
      filter: brightness(0.9);
      }

    }

    input {
     flex: 1;
     background: transparent;
     border: 0;

      &::placeholder {
       color: #b7b7cc;
      }

    }

    @media (max-width: 650px) {
      width: 100%;
      display: flex;
      align-self: center;

      padding: 18px 6px;

      input {
        width: 100px;
      }

    }

 
`;


