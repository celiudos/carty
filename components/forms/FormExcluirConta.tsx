import { Button, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import MuiDate from "./fields/MuiDate";
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

export default function FormExcluirConta() {
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Deseja excluir sua conta?</Typography>
          <Typography variant="h6" color="error" mt={2}>
            Atenção! Essa operação não cancela a sua assinatura. O cancelamento
            da assinatura deve ser realizado diretamente na loja de aplicativos.
          </Typography>
          <Typography variant="h6" mt={2}>
            Vamos sentir saudades! Conta pra gente o que a gente precisa fazer
            para você voltar...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MuiTextfield
            inputProps={{
              ...register("input"),
            }}
            multiline
            sx={{height: '100px', marginBottom: '32px'}}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit" color="error">
              EXCLUIR
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
