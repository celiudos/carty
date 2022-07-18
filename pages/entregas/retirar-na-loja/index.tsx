import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, FormControlLabel, FormGroup, Grid, Link as LinkMui, Switch, Typography } from '@mui/material';
import Link from 'next/link';

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/entregas/retirar-na-loja"
            menuItens={MENU_ITEMS.entregas_retirarNaLoja}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/entregas" passHref>
                <LinkMui>
                  <Typography>Entregas</Typography>
                </LinkMui>
              </Link>
              <Typography>Retirar na Loja</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Deseja permitir a retirada dos produtos na sua loja física?
            </Typography>
            <Typography gutterBottom variant="h6">
              Alguns clientes preferem buscar o produto para economizar na taxa
              de entrega.
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
