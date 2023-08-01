import classNames from 'classnames';
import { Card } from 'react-bootstrap';

type RibbonProps = {
    label: string;
    color: string;
    direction: 'left' | 'right';
    children: React.ReactNode;
};

const Ribbon = ({ label, color, direction, children }: RibbonProps) => {
    return (
        <Card className="ribbon-box">
            <Card.Body>
                {/* <div
                    className={classNames(
                        'ribbon',
                        'ribbon-' + color,
                         { 'bg-dark text-light': color === 'dark' },
                         { 'bg-secondary text-light': color === 'secondary' },
                        direction === 'left' ? 'float-end' : 'float-start'
                    )}>
                    <i className="mdi mdi-access-point me-1"></i> {label}
                </div> */}
                <h5 className={classNames('text-' + color, 'mt-0', direction === 'left' ? 'float-start' : 'float-end')}>
                    {label}
                </h5>
                <div className="ribbon-content">{children}</div>
            </Card.Body>
        </Card>
    );
};

export default Ribbon;
