import styled from 'styled-components';

export const Container = styled.div`
width: 100%;

display: flex;
align-items: center;
flex-direction: column;


svg {
  width: 2rem;
  height: 2rem;
  color: var(--blue-light); 

  margin-left: 40rem ;

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

  margin-bottom: 0,5rem;
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
      color: var(--text-title);
      padding: 1rem 0.5rem;

    }

    span {
      font-weight: 400;
      color: var(--text-body);
    }
  }

`
