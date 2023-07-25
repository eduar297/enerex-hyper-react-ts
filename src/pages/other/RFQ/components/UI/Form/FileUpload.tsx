import {
  FormControl as _FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
} from 'react-bootstrap';

type FileUploadProps = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
  touched?: boolean | undefined;
  error?: string | undefined;
  name?: string | undefined;
  label?: string | undefined;
  controlId?: string | undefined;
  enabled?: boolean;
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
}: FileUploadProps) => {
  return (
    <FormGroup controlId={controlId}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <_FormControl
          disabled={!enabled}
          type="file"
          name={name}
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

export default FileUpload;
