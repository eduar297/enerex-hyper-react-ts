import { FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';

type DatepickerProps = {
    value: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
    touched?: boolean | undefined;
    error?: string | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    label?: string | undefined;
    controlId?: string | undefined;
    enabled?: boolean;
};

const Datepicker = ({
    value,
    handleChange,
    handleBlur,
    touched,
    error,
    name,
    placeholder,
    label,
    controlId,
    enabled = true,
}: DatepickerProps) => {
    return (
        <FormGroup controlId={controlId}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                {
                    <InputGroup.Text>
                        <i className="mdi mdi-calendar"></i>
                    </InputGroup.Text>
                }
                <FormControl
                    disabled={!enabled}
                    type="date"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={enabled && touched && Boolean(error)}
                    isValid={enabled && touched && !Boolean(error)}
                />
                {enabled && touched && Boolean(error) && (
                    <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
                )}
            </InputGroup>
        </FormGroup>
    );
};

export default Datepicker;
