import { FormCheck, FormGroup, FormLabel, InputGroup, FormControl } from 'react-bootstrap';

type CheckboxProps = {
    value: boolean | undefined;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
    touched?: boolean | undefined;
    error?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    controlId?: string | undefined;
    enabled?: boolean;
};

const CheckBox = ({
    value,
    handleChange,
    handleBlur,
    touched,
    error,
    name,
    label,
    controlId,
    enabled = true,
}: CheckboxProps) => {
    return (
        <FormGroup controlId={controlId}>
            {/* <FormLabel></FormLabel> */}
            <InputGroup>
                <FormCheck
                    disabled={!enabled}
                    type="checkbox"
                    name={name}
                    label={label}
                    checked={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={enabled && touched && Boolean(error)}
                    feedback={enabled && touched && error}
                />
                {enabled && touched && Boolean(error) && (
                    <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
                )}
            </InputGroup>
        </FormGroup>
    );
};

export default CheckBox;
