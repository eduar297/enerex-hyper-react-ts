import { FormControl, FormGroup, FormLabel, Form, InputGroup } from 'react-bootstrap';
import Spinner from '../Spinner';

type SelectProps = {
    value: string | undefined;
    handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void | undefined;
    handleBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void | undefined;
    touched?: boolean | undefined;
    error?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    placeholder?: string | null;
    inputGroupTextStart?: string | undefined;
    inputGroupTextEnd?: string | undefined;
    controlId?: string | undefined;
    loading?: boolean | undefined;
    fetchError?: string | undefined;
    options?:
        | {
              value: string;
              label: string;
          }[]
        | undefined;
    enabled?: boolean;
};

const Select = ({
    value,
    handleChange,
    handleBlur,
    touched,
    error,
    name,
    label,
    placeholder,
    inputGroupTextStart,
    inputGroupTextEnd,
    controlId,
    loading,
    fetchError,
    options,
    enabled = true,
}: SelectProps) => {
    return (
        <div>
            <FormGroup controlId={controlId}>
                {Boolean(label) && <FormLabel>{label}</FormLabel>}
                <InputGroup>
                    {Boolean(inputGroupTextStart) && <InputGroup.Text>{inputGroupTextStart}</InputGroup.Text>}
                    <Form.Select
                        disabled={!enabled}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={enabled && touched && Boolean(error)}
                        isValid={enabled && touched && !Boolean(error)}>
                        {placeholder && <option value="">{placeholder}</option>}
                        {loading && <option value="">Loading...</option>}
                        {Boolean(fetchError) && <option value="">Error</option>}
                        {options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </Form.Select>
                    {Boolean(inputGroupTextEnd) && <InputGroup.Text>{inputGroupTextEnd}</InputGroup.Text>}
                    {/* {loading && (
                        <InputGroup.Text>
                            <Spinner />
                        </InputGroup.Text>
                    )} */}
                    {enabled && touched && Boolean(error) && (
                        <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
                    )}
                </InputGroup>
            </FormGroup>
        </div>
    );
};

export default Select;
