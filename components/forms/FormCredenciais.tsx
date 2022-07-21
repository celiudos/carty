import { Button, Grid, Stack, Typography } from "@mui/material";
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

export default function FormCredenciais() {
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
          <Typography variant="h2"> Informe suas Credenciais</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="legend">
            As credenciais são senhas únicas com as quais identificamos uma
            integração na sua conta. Servem para capturar pagamentos em lojas
            virtuais e outras aplicações de forma segura. Elas podem ser
            encontradas na sua conta Mercado Pago (na Internet).{" "}
            <strong>
              Seu negócio {">"} Configurações {">"} Gestão e Administração {">"}{" "}
              Credenciais.
            </strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5">
            Chave Pública ( Public Key )
          </Typography>
          <MuiTextfield
            inputProps={{
              ...register("input"),
            }}
          />
          <Typography gutterBottom variant="h5">
            Chave Privada ( Private Key )
          </Typography>
          <MuiTextfield
            inputProps={{
              ...register("input2"),
            }}
          />
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
