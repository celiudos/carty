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

export default function FormSenha() {
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
          <Typography variant="h2">Mudar Senha</Typography>
        </Grid>
        <Grid item xs={12}>
          <MuiTextfield
            inputProps={{
              placeholder: "senha atual ou senha recebida pelo email",
              ...register("input"),
            }}
            size="small"
            sx={{width: '50%'}}
          />
        </Grid>
        <Grid item xs={12}>
          <MuiTextfield
            inputProps={{
              placeholder: "nova senha",
              ...register("input2"),
            }}
            size="small"
            sx={{width: '50%'}}
          />
        </Grid>
        <Grid item xs={12}>
          <MuiTextfield
            inputProps={{
              placeholder: "confirme a nova senha",
              ...register("input3"),
            }}
            size="small"
            sx={{width: '50%'}}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              ALTERAR
            </Button>
            <Button variant="text">CANCELAR</Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
