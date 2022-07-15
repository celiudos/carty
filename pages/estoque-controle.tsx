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
            iconName="akar-icons:shipping-box-v2"
            text="Produtos do estoque"
            href="estoque"
          />
        </Grid>
        <Grid item lg>
          <Typography gutterBottom variant="h2">
            Controle de estoque
          </Typography>
          <Typography gutterBottom variant="h6">
            Ofereça aos seus clientes apenas os produtos que você possui em estoque e evite compras frustadas.
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroup>
        </Grid>
      </Grid>
    </Layout>
  );
}
