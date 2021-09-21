import { createContext, useEffect, useState, ReactNode, useContext, useCallback } from 'react';
import api from '../services/api';

interface User {
  gender: string;
  picture:{large: string};
  name: {
    first: string;
    last: string;
  }
  dob: { date: string}
  login: { uuid: string};
  email: string;
  

}

interface IUser{
  img: string;
  gender: string;
  nameFirest:string;
  nameLast: string;
  email: string;
  id: string
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
  const [data, setData] = useState<IUser>();

  useEffect(() => {
   const response = api.get('api/?results=10')
      .then(response => 
        setUsers(response.data.results)
        );
  }, []);


 
    const user = users.map(user => {
      return {
        img: user.picture.large,
        gender: user.gender,
        nameFirest: user.name.first,
        nameLast: user.name.last,
        email: user.email,
        id: user.login.uuid,
      }
     
    })





  console.log(user)


 

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