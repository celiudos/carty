import { Icon } from "@iconify/react";
import { Button, Grid, Box, Stack, Typography } from "@mui/material";
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

export default function FormInformeCep() {
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
          <Typography variant="h2">Informe o CEP da sua Loja</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="legend">
            O CEP da sua loja será utilizado para o cálculo do frete automático.
          </Typography>
        </Grid>
        <Box sx={{display: 'flex', alignItems: 'center', mt: '12px', px: '12px'}}>
          <MuiTextfield
            inputProps={{
              ...register("input"),
            }}
            sx={{mr: '12px'}}
          />
          <Icon icon="akar-icons:location" height='24' />
        </Box>       
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
