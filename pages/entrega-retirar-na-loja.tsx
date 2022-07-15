import IconLink from "@components/iconLink/IconLink";
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
        <Grid item lg={3}>
          <IconLink
            iconName="akar-icons:location"
            text="Endereço da Loja"
            href="entregas"
          />
        </Grid>
        <Grid item lg>
          <Typography gutterBottom variant="h2">
           Deseja permitir a retirada dos produtos na sua loja física?
          </Typography>
          <Typography gutterBottom variant="h6">
            Alguns clientes preferem buscar o produto para economizar na taxa de entrega.
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroup>
        </Grid>
      </Grid>
    </Layout>
  );
}
