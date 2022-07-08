import {
  Select,
  MenuItem,
  Input,
  Grid,
  Rating,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import MuiDate from "./MuiDate";

const defaultValues = {
  select: "",
  input: "",
  input2: "",
};

interface IFormInput {
  select: string;
  input: string;
  input2: string;
  input3: string;
  input4: string;
}

export default function FormAvaliacao() {
  const { register, handleSubmit, setValue, reset, watch } =
    useForm<IFormInput>({
      defaultValues,
    });
  const selectValue = watch("select");
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("select");
  }, [register]);

  const handleChange = (e: any) => setValue("select", e.target.value);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Avalie a sua experiência
          </Typography>
          <Rating name="size-large" defaultValue={2} size="large" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Título da avaliação
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{ ...register("input") }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Nome do usuário
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{ ...register("input2") }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Avaliação
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic2"
            variant="outlined"
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Data da avaliação
          </Typography>
          <MuiDate
            textFieldParams={{
              label: "",
              inputProps: { ...register("input4") },
            }}
          />
        </Grid>
      </Grid>
      <button type="button" onClick={() => reset({ ...defaultValues })}>
        Reset
      </button>
      <input type="submit" />
    </form>
  );
}
