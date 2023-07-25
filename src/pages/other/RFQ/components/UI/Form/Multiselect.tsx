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
    inputGroupText?: string | undefined;
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
    inputGroupText,
    controlId,
    loading,
    options,
    enabled = true,
}: MultiselectProps) => {
    return (
        <div>
            <FormGroup controlId={controlId}>
                {Boolean(label) && <FormLabel>{label}</FormLabel>}
                <InputGroup>
                    {Boolean(inputGroupText) && <InputGroup.Text>{inputGroupText}</InputGroup.Text>}
                    <ReactSelect
                        classNamePrefix="react-select"
                        isMulti
                        name={name}
                        value={value}
                        onChange={handleChange}
                        options={options}
                        placeholder={placeholder}
                    />
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
        </div>
    );
};

export default Multiselect;
