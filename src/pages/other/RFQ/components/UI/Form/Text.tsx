import { FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';

type TextProps = {
    value: string | number | undefined;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
    touched?: boolean | undefined;
    error?: string | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    label?: string | undefined;
    type?: 'text' | 'email' | 'password' | 'number' | undefined;
    inputGroupTextStart?: string | undefined;
    inputGroupTextEnd?: string | undefined;
    controlId?: string | undefined;
    enabled?: boolean;
};

const Text = ({
    value,
    handleChange,
    handleBlur,
    touched,
    error,
    name,
    placeholder,
    label,
    type = 'text',
    inputGroupTextStart,
    inputGroupTextEnd,
    controlId,
    enabled = true,
}: TextProps) => {
    return (
        <FormGroup controlId={controlId}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                {Boolean(inputGroupTextStart) && <InputGroup.Text>{inputGroupTextStart}</InputGroup.Text>}
                <FormControl
                    disabled={!enabled}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={enabled && touched && Boolean(error)}
                    isValid={enabled && touched && !Boolean(error)}
                />
                {Boolean(inputGroupTextEnd) && <InputGroup.Text>{inputGroupTextEnd}</InputGroup.Text>}
                {enabled && touched && Boolean(error) && (
                    <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
                )}
            </InputGroup>
        </FormGroup>
    );
};

export default Text;
