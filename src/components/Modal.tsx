import { Desciption } from "./Description";

interface IProps {
  text: string;
}

export function Modal() {
  return (
    <div>
      <h1>Modal</h1>
      <Desciption />
    </div>
  );
}
