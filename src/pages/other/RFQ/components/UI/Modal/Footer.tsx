import { Modal } from 'react-bootstrap';

interface FooterProps {
  className?: string;
  children: React.ReactNode;
}

const Footer = ({ className, children }: FooterProps) => {
  return <Modal.Footer className={className}>{children}</Modal.Footer>;
};

export default Footer;
