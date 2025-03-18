import { createContext, ReactNode, useState } from "react";


interface IAuthContextData {
    text: string;
    signIn: () => void;
    user: IUser;
}

interface IUser {
    name: string
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext ({} as IAuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState ({
    name: '',
    email: '',
  })
  const text = 'Michel Lopes';

  function signIn () {
    setUser({
      name: "Michel Lopes",
      email: "michel@teste.com",
    });
  }

  return (
    <AuthContext.Provider value={{ text, signIn, user }}>
        {children}
    </AuthContext.Provider>
  );
}
