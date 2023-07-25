import { FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import ReactSelect from 'react-select';
import Spinner from '../Spinner';

type MultiselectProps = {
    value: { label: string; value: string }[] | undefined;
    handleChange?: (value: any, actionMeta: any) => void | undefined;
    touched?: boolean | undefined;
    error?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    inputGroupTextStart?: string | undefined;
    inputGroupTextEnd?: string | undefined;
    controlId?: string | undefined;
    loading?: boolean | undefined;
    options?:
        | {
              value: string;
              label: string;
          }[]
        | undefined;
    enabled?: boolean;
};

const Multiselect = ({
    value,
    handleChange,
    touched,
    error,
    name,
    label,
    placeholder,
    inputGroupTextStart,
    inputGroupTextEnd,
    controlId,
    loading,
    options,
    enabled = true,
}: MultiselectProps) => {
    return (
        <FormGroup controlId={controlId}>
            {Boolean(label) && <FormLabel>{label}</FormLabel>}
            <InputGroup>
                {Boolean(inputGroupTextStart) && <InputGroup.Text>{inputGroupTextStart}</InputGroup.Text>}
                <ReactSelect
                    classNamePrefix="react-select"
                    isMulti
                    name={name}
                    value={value}
                    onChange={handleChange}
                    options={options}
                    placeholder={placeholder}
                />
                {Boolean(inputGroupTextEnd) && <InputGroup.Text>{inputGroupTextEnd}</InputGroup.Text>}

                {loading && (
                    <InputGroup.Text>
                        <Spinner />
                    </InputGroup.Text>
                )}
                {enabled && touched && Boolean(error) && (
                    <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
                )}
            </InputGroup>
        </FormGroup>
    );
};

export default Multiselect;
