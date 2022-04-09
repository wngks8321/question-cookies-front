import { TextField } from '@mui/material';
import { TextFieldWrapper } from './AnswerTextField.styled';

const AnswerTextField = () => {
  return (
    <TextFieldWrapper>
      <TextField
        multiline
        maxRows={4}
        fullWidth
      />
    </TextFieldWrapper>
  );
};

export default AnswerTextField;