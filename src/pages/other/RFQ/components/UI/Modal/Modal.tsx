import { Modal as _Modal } from 'react-bootstrap';

interface ModalProps {
  className?: string;
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ className, show, handleClose, children }: ModalProps) => {
  return (
    <_Modal
      className={className}
      show={show}
      onHide={handleClose}
      // fullscreen
      size="xl"
      centered
    >
      {children}
    </_Modal>
  );
};

export default Modal;
