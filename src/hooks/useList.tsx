import { createContext, useEffect, useState, ReactNode, useContext, useCallback } from 'react';
import api from '../services/api';


export interface User {
  picture: { large: string };
  name: {
    first: string;
    last: string;
  }
  email: string;
  gender: string;
  dob: { date: string };
  phone: string;
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

};


interface UserProviderProps {
  children: ReactNode;
}

interface UserContexData {
  users: User[];
  handleFilterValue: (input: string) => void;
}

const UsersContext = createContext<UserContexData>(
  {} as UserContexData
);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('api/?results=50')
      .then(response =>
        setUsers(response.data.results)
      );
  }, []);


  const handleFilterValue = useCallback((input: string) => {
    const value = users.filter(user => {
      if (
        user.name.first.toLowerCase() === input ||
        user.gender === input
      ) {
        return user;
      }
    });
    setUsers(value);
  }, [users]);


  return (
    <UsersContext.Provider value={{ users, handleFilterValue, }}>
      {children}
    </UsersContext.Provider>
  )


}

export function useList() {
  const context = useContext(UsersContext);

  return context;
}