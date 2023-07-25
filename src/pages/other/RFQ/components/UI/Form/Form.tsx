import { Form as BootstrapForm } from 'react-bootstrap';

type FormProps = {
  id: string;
  children: React.ReactNode;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
};

const Form = ({ children, onSubmit, id }: FormProps) => {
  return <BootstrapForm onSubmit={onSubmit}>{children}</BootstrapForm>;
};

export default Form;
