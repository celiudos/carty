import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker, { DatePickerProps } from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextFieldProps } from "@mui/material";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

import MuiTextfield from "./MuiTextfield";

interface IProps
  extends Omit<DatePickerProps, "renderInput" | "value" | "onChange"> {
  textFieldParams?: TextFieldProps;
}

export default function MuiDate({
  textFieldParams,
  ...props
}: IProps): JSX.Element {
  const [date, setDate] = useState<any>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <DatePicker
        {...props}
        value={date}
        onChange={(date) => setDate(date)}
        renderInput={(params) => (
          <MuiTextfield
            sx={{ width: "200px" }}
            {...textFieldParams}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
