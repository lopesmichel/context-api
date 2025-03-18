import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.tsx";
import { useAuth } from "../hooks/auth.ts";

interface IProps {
    text: string;
}
export function Desciption() {
  const {user} = useAuth();
  return (
    <div>
      <h1>Desciption: {JSON.stringify(user)}</h1>
    </div>
  );
}
