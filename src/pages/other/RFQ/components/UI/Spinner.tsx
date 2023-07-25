import { Spinner as SpinnerBootstrap } from 'react-bootstrap';

const Spinner: React.FC = () => (
    <SpinnerBootstrap animation="grow" size="sm" variant="primary" role="status" aria-hidden="true" />
);

export default Spinner;
