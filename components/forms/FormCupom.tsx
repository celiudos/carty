import { Button, Grid, Slider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
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

export default function FormCupom() {
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
          <Typography variant="h2"> Criar Cupom</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5">
            Código do Cupom:
          </Typography>
          <MuiTextfield
            inputProps={{
              ...register("input"),
            }}
          />
          <Typography mt={2} gutterBottom variant="h5">
          Começa em:
          </Typography>
          <MuiDate
            textFieldParams={{
              inputProps: {
                ...register("input2"),
              },
            }}
          />
          <Typography mt={2} gutterBottom variant="h5">
          Termina em:
          </Typography>
          <MuiDate
            textFieldParams={{
              inputProps: {
                ...register("input3"),
              },
            }}
          />
          <Typography mt={2}gutterBottom variant="h5">
          Desconto do cupom:
          </Typography>
          <Slider valueLabelDisplay="on" defaultValue={10}/>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" type="submit">
              Salvar
            </Button>
            <Button variant="text">Voltar</Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
