import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import MuiTextfield from "./fields/MuiTextfield";

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

export default function FormEnvioRetirarNaLoja() {
  const { register, handleSubmit, setValue, watch } =
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Seu negócio possui um endereço fixo?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="legend">
            Inclua seu endereço, telefone e email e aumente a confiabilidade do seu negócio.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MuiTextfield
            inputProps={{
              ...register("input"),
            }}
            placeholder="endereço"
          />
          <Divider sx={{mb: '8px'}} />
          <MuiTextfield
            inputProps={{
              ...register("input2"),
            }}
            placeholder="telefone"
          />
          <Divider sx={{mb: '8px'}} />
          <MuiTextfield
            inputProps={{
              ...register("input3"),
            }}
            placeholder="email"
          />
          <Divider sx={{mb: '8px'}} />
        </Grid>
       
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              Salvar
            </Button>
            <Button variant="text">Cancelar</Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
