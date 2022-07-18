import FormEnvioRetirarNaLoja from '@components/forms/FormEnvioRetirarNaLoja';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, List, Typography } from '@mui/material';
import Link from 'next/link';

export default function EnderecoDaLoja() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <List>
            <MenuEsquerdo menuItens={MENU_ITEMS.entregas_retirarNaLoja} />
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
              <Link href="/entregas/retirar-na-loja" passHref>
                <LinkMui>
                  <Typography>Retirar na Loja</Typography>
                </LinkMui>
              </Link>
              <Typography>Endereço da Loja</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <FormEnvioRetirarNaLoja />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
