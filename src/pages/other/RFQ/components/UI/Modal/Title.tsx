import { Modal } from 'react-bootstrap';

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title = ({ className, children }: TitleProps) => {
  return <Modal.Title className={className}>{children}</Modal.Title>;
};

export default Title;
