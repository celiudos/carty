import { TextField, TextFieldProps } from "@mui/material";

export default function MuiTextfield({
  ...props
}: TextFieldProps): JSX.Element {
  return (
    <TextField
      fullWidth
      id="outlined-basic"
      variant="outlined"
      color="secondary"
      {...props}
    />
  );
}
