import IconLink from "@components/iconLink/IconLink";
import Layout from "@components/layout/Layout";
import { Icon } from "@iconify/react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
            text="CEP da loja"
            href="entregas"
          />
          <IconLink
            iconName="akar-icons:shipping-box-v2"
            text="Dimensões dos produtos"
            href="entregas"
          />
        </Grid>
        <Grid item lg>
          <Typography gutterBottom variant="h2">
            Sua loja integrada aos Correios.
          </Typography>
          <Typography gutterBottom variant="h6">
            Informe o CEP da sua loja e as dimensões dos seus produtos para um
            cálculo de frete automático.
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroup>
        </Grid>
      </Grid>
    </Layout>
  );
}
