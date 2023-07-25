import { FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import SimpleMDEReact, { SimpleMDEReactProps } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

type EditorProps = {
    delay?: number | undefined;
    id?: string;
    value: string | undefined;
    handleChange?: (e: any) => void | undefined;
    handleBlur?: (e: any) => void | undefined;
    touched?: boolean | undefined;
    error?: string | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
    label?: string | undefined;
    controlId?: string | undefined;
    rows?: number | undefined;
    enabled?: boolean;
};

const Editor = ({
    value,
    handleChange,
    handleBlur,
    touched,
    error,
    name,
    placeholder,
    label,
    controlId,
    rows = 3,
    enabled = true,
    delay = 1000,
    id = 'editor',
}: EditorProps) => {
    const options: SimpleMDEReactProps['options'] = {
        autosave: {
            enabled: true,
            uniqueId: '1',
            delay,
        },
    };

    return (
        <FormGroup controlId={controlId}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <SimpleMDEReact
                    className="w-100"
                    id={id}
                    options={options}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                />

                {enabled && touched && Boolean(error) && (
                    <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
                )}
            </InputGroup>
        </FormGroup>
    );
};

export default Editor;
