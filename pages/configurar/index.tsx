import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Typography } from '@mui/material';

export default function Configurar() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/configurar"
            menuItens={MENU_ITEMS.configurar}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Configurar</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Bem vindo à área de configuração
            </Typography>
            <Typography gutterBottom variant="h6">
              Selecione um item do menu à esquerda.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
