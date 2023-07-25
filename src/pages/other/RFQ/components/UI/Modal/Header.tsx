import { Modal } from 'react-bootstrap';

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

const Header = ({ className, children }: HeaderProps) => {
  return (
    <Modal.Header closeButton className={className}>
      {children}
    </Modal.Header>
  );
};

export default Header;
