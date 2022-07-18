import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material';

export default function Avaliacoes() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/avaliacoes"
            menuItens={MENU_ITEMS.avaliacoes}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Avalições</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
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
      </Grid>
    </Layout>
  );
}
