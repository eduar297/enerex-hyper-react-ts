import { FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';

type FileUploadProps = {
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
    touched?: boolean | undefined;
    error?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    controlId?: string | undefined;
    enabled?: boolean;
    labelFloatEnd?: string;
};

const FileUpload = ({
    handleChange,
    handleBlur,
    touched,
    error,
    name,
    label,
    controlId,
    enabled = true,
    labelFloatEnd = 'Max file size 20mb',
}: FileUploadProps) => {
    return (
        <FormGroup controlId={controlId}>
            <FormLabel>{label}</FormLabel>
            <FormLabel className="alert-validation float-end">{labelFloatEnd}</FormLabel>
            <InputGroup>
                <FormControl
                    disabled={!enabled}
                    type="file"
                    name={name}
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

export default FileUpload;
