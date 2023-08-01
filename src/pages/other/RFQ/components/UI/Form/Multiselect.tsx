import { FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import Spinner from '../Spinner';

const animatedComponents = makeAnimated();

type MultiselectProps = {
    className?: string;
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
    className,
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
        <FormGroup controlId={controlId} className={className}>
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
        // <FormGroup controlId={controlId} className={className}>
        //     {Boolean(label) && <FormLabel>{label}</FormLabel>}
        //     {/* <InputGroup> */}
        //     {Boolean(inputGroupTextStart) && <InputGroup.Text>{inputGroupTextStart}</InputGroup.Text>}
        //     <ReactSelect
        //         components={animatedComponents}
        //         isMulti={true}
        //         value={value}
        //         options={options}
        //         onChange={handleChange}
        //         className="react-select"
        //         classNamePrefix="react-select"
        //         placeholder={placeholder}
        //         isLoading={loading}
        //         loadingMessage={() => <Spinner />}
        //     />
        //     {/* </InputGroup> */}
        // </FormGroup>
    );
};

export default Multiselect;
