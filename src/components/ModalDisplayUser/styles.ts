import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

`

export const ContentClose = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    display: flex;
    width: 2rem;
    height: 2rem;
    color: var(--blue-light); 
    
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
    filter: brightness(0.9);
    }
 }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    margin-bottom: 1rem;
  }


  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: var(--text-title);
    margin-bottom: 3rem;
  }

`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  


  ul {
    list-style-type: none;
    line-height: 2rem;

  }

  li {
    
      strong {
        font-weight: 600;
        font-size: 16px;
        color: var(--text-title);
        padding: 1rem 0.5rem;

      }

      span {
        font-weight: 400;
        font-size: 16px;
        color: var(--text-body);
      }
 }

    @media (max-width: 506px) {
      li {
    
        strong {
          font-weight: 600;
          font-size: 12px;
          color: var(--text-title);
        }

        span {
          font-weight: 400;
          font-size: 12px;
          color: var(--text-body);
        }
      }

    }

`
