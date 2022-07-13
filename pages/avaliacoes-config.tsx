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
            iconName="akar-icons:star"
            text="Avaliações"
            href="avaliacoes"
          />
        </Grid>
        <Grid item lg>
          <Typography gutterBottom variant="h2">
            Avaliações dos Clientes
          </Typography>
          <Typography gutterBottom variant="h6">
            A prova social é fundamental para converter visitas a sua loja em
            vendas. Envie o link de avaliação para os seus clientes na tela de
            pedidos, após a conclusão do pedido.
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroup>
        </Grid>
      </Grid>
    </Layout>
  );
}
