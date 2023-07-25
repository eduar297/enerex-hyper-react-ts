import { Modal } from 'react-bootstrap';

interface BodyProps {
  className?: string;
  children: React.ReactNode;
}

const Body = ({ className, children }: BodyProps) => {
  return <Modal.Body className={className}>{children}</Modal.Body>;
};

export default Body;
