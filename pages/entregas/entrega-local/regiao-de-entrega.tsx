import FormEntregaRegiao from '@components/forms/FormEntregaRegiao';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function RegiaoDeEntrega() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/entregas/entrega-local"
            menuItens={MENU_ITEMS.entregas_entregaLocal}
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
              <Link href="/entregas/entrega-local" passHref>
                <LinkMui>
                  <Typography>Entrega Local</Typography>
                </LinkMui>
              </Link>
              <Typography>Região de Entrega</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <FormEntregaRegiao />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
