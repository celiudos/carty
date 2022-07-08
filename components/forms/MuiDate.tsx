import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker, { DatePickerProps } from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField, TextFieldProps } from "@mui/material";
import { ptBR } from "date-fns/locale";

interface IProps extends Omit<DatePickerProps, "renderInput"> {
  textFieldParams?: TextFieldProps;
}

export default function MuiDate({
  textFieldParams,
  ...props
}: IProps): JSX.Element {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <DatePicker
        {...props}
        value={props.value}
        onChange={(date) => {
          props.onChange(date);
        }}
        renderInput={(params) => <TextField {...params} {...textFieldParams} />}
      />
    </LocalizationProvider>
  );
}
