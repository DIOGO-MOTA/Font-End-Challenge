import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import api from '../services/api';

interface User {
  picture: { thumbnail: string };
  name: {
    first: string;
    last: string;
  }
  email: string;
  gender: string;
  dob: { date: string };
  phone: string;
  cell: string;
  login: { uuid: string };
  location: {
    street: {
      number: string;
      name: string;
    },
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  
} ;


interface UserProviderProps {
  children: ReactNode;
}

interface UserContexData {
  users: User[];
}

const UsersContext = createContext<UserContexData>(
  {} as UserContexData
);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('api/?results=10')
      .then(response =>
        setUsers(response.data.results)
      );
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  )


}

export function useList() {
  const context = useContext(UsersContext);

  return context;
}