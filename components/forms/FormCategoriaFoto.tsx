import ButtonLinkNext from '@components/buttons/ButtonLinkNext';
import { Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

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

export default function FormCategoria() {
  const { register, handleSubmit, setValue, watch } = useForm<IFormInput>({
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
          <Typography variant="h2">Defina a foto da sua categoria.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="legend">
            Alguns modelos apresentam a foto da categoria. Selecione a foto que
            você deseja.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* falta componente de upload de imagem */}
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              Salvar
            </Button>
            <ButtonLinkNext href="/categorias">Cancelar</ButtonLinkNext>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
