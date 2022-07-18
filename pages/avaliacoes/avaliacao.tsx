import FormAvaliacao from '@components/forms/FormAvaliacao';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function Index() {
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
              <Link href="/avaliacoes" passHref>
                <LinkMui>
                  <Typography>Avalições</Typography>
                </LinkMui>
              </Link>
              <Typography>Avaliação</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <FormAvaliacao />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
