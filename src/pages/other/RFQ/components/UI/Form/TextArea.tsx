import {
  FormControl as _FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
} from 'react-bootstrap';

type TextAreaProps = {
  value: string | undefined;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
  touched?: boolean | undefined;
  error?: string | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  label?: string | undefined;
  controlId?: string | undefined;
  rows?: number | undefined;
  enabled?: boolean;
};

const TextArea = ({
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
}: TextAreaProps) => {
  return (
    <FormGroup controlId={controlId}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <_FormControl
          disabled={!enabled}
          as="textarea"
          rows={rows}
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

export default TextArea;
