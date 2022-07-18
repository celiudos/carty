import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, FormControlLabel, FormGroup, Grid, Link as LinkMui, Switch, Typography } from '@mui/material';
import Link from 'next/link';

export default function BarraDePesquisa() {
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
              <Link href="/configurar" passHref>
                <LinkMui>
                  <Typography>Configurar</Typography>
                </LinkMui>
              </Link>
              <Typography>Barra de Pesquisa</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Barra de Pesquisa
            </Typography>
            <Typography gutterBottom variant="h6">
              Habilite a barra de pesquisa de produtos no seu site.
            </Typography>

            <form>
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Ativado" />
              </FormGroup>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
