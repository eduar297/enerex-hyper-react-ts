import { FormControl as _FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';

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
    inputGroupText?: string | undefined;
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
    inputGroupText,
    controlId,
    enabled = true,
}: TextProps) => {
    return (
        <FormGroup controlId={controlId}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                {Boolean(inputGroupText) && <InputGroup.Text>{inputGroupText}</InputGroup.Text>}
                <_FormControl
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
                {enabled && touched && Boolean(error) && (
                    <_FormControl.Feedback type="invalid">{error}</_FormControl.Feedback>
                )}
            </InputGroup>
        </FormGroup>
    );
};

export default Text;
