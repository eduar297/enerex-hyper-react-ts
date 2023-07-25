import React, { useContext } from 'react';
import { Card, Accordion as AccordionBootstrap, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export type ItemProps = {
    header?: React.ReactNode;
    content?: React.ReactNode;
};

type AccordionProps = {
    className?: string;
    defaultActiveKey?: string;
    id?: string;
    items?: ItemProps[];
};

type CustomAccordionProps = {
    item: ItemProps;
    index: number;
};

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <h5 className={containerClass}>
            <Link
                to="#"
                className={classNames(linkClass, {
                    collapsed: !isCurrentEventKey,
                })}
                onClick={decoratedOnClick}>
                {children}
            </Link>
        </h5>
    );
};

const CustomAccordion = ({ item, index }: CustomAccordionProps) => {
    return (
        <Card className="mb-0">
            <Card.Header>
                <CustomToggle
                    eventKey={String(index)}
                    containerClass="m-0"
                    linkClass="custom-accordion-title d-block pt-2 pb-2">
                    {item.header}
                </CustomToggle>
            </Card.Header>
            <AccordionBootstrap.Collapse eventKey={String(index)}>
                <div>
                    <Card.Body>{item.content}</Card.Body>
                </div>
            </AccordionBootstrap.Collapse>
        </Card>
    );
};

const Accordion = ({ className, items, id = 'accordion', defaultActiveKey }: AccordionProps) => {
    return (
        <AccordionBootstrap defaultActiveKey={defaultActiveKey} id={id} className={className}>
            {(items || []).map((item, index) => {
                return <CustomAccordion key={index.toString()} item={item} index={index} />;
            })}
        </AccordionBootstrap>
    );
};

export default Accordion;
