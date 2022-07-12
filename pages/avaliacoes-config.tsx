import Layout from "@components/layout/Layout";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h2">
            Avaliações dos Clientes
          </Typography>
          <Typography gutterBottom variant="h6">
            A prova social é fundamental para converter visitas a sua loja em
            vendas. Envie o link de avaliação para os seus clientes na tela de
            pedidos, após a conclusão do pedido.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroup>
          {/* <IconLink
            iconName="akar-icons:star"
            text="Avaliações"
            href="avaliacoes"
          /> */}
        </Grid>
      </Grid>
    </Layout>
  );
}
