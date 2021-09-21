import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import api from '../services/api';

interface User {
  gender: string;
  name: {
    last: string;
  }
  dob: { date: string}
  login: { uuid: string};
}



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