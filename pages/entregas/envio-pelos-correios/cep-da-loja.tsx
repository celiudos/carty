import FormInformeCep from '@components/forms/FormInformeCep';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, List, Typography } from '@mui/material';
import Link from 'next/link';

export default function CepDaLoja() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <List>
            <MenuEsquerdo menuItens={MENU_ITEMS.entregas_envioPelosCorreios} />
          </List>
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/entregas" passHref>
                <LinkMui>
                  <Typography>Entregas</Typography>
                </LinkMui>
              </Link>
              <Link href="/entregas/envio-pelos-correios" passHref>
                <LinkMui>
                  <Typography>Envio pelos Correios</Typography>
                </LinkMui>
              </Link>
              <Typography>CEP da loja</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <FormInformeCep />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
