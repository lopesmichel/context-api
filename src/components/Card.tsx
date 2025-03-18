import { useAuth } from "../hooks/auth";
import { Modal } from "./Modal";

interface IProps {
  text: string;
}

export function Card () {
    const { signIn } = useAuth();
    const submit = () => {
        signIn();
    };
    return (
        <div>
            <h1>Card</h1>
            <button onClick={submit}>Entrar</button>
            <Modal />
        </div>
    )
}