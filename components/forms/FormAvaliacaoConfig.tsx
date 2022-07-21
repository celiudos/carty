import { Button, Grid, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import MuiDate from './fields/MuiDate';
import MuiTextfield from './fields/MuiTextfield';

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Avaliação</Typography>
        </Grid>
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
          <MuiTextfield
            inputProps={{
              placeholder: "Achei uma maravilha!",
              ...register("input"),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Descrição
          </Typography>
          <MuiTextfield
            multiline
            minRows={4}
            inputProps={{
              placeholder: "Vou deixar aqui algumas observações...",
              ...register("input3"),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Nome do usuário
          </Typography>
          <MuiTextfield
            inputProps={{
              placeholder: "João Alberto",
              ...register("input2"),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="legend">
            Data da avaliação
          </Typography>
          <MuiDate
            textFieldParams={{
              inputProps: {
                ...register("input4"),
              },
            }}
          />
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
