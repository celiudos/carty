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

export default function FormEntregaRegiao() {
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
          <Typography variant="h2">Região de Entrega</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="legend">
            Nome da Região/Bairro:
          </Typography>
        </Grid>
        <Box sx={{display: 'flex', alignItems: 'center', mt: '12px', px: '12px'}}>
          <MuiTextfield
            inputProps={{
              ...register("input")
            }}
            sx={{mr: '12px'}}

          />
        </Box>       
        <Grid item xs={12}>
          <Typography variant="h6" component="legend">
            Taxa de entrega:
          </Typography>
        </Grid>
        <Box sx={{display: 'flex', alignItems: 'center', mt: '12px', px: '12px'}}>
          <MuiTextfield
            inputProps={{
              ...register("input"),
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            helperText="Digite 0 para Frete Grátis"
            sx={{mr: '12px'}}
          />
        </Box>

        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              Salvar
            </Button>
            <Button variant="text">Cancelar</Button>
            <Button variant="outlined" color="error">Excluir</Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
