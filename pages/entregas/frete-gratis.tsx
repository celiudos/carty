import FormFreteGratis from '@components/forms/FormFreteGratis';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function FreteGratis() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo urlBase="/entregas" menuItens={MENU_ITEMS.entregas} />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/entregas" passHref>
                <LinkMui>
                  <Typography>Entregas</Typography>
                </LinkMui>
              </Link>
              <Typography>Frete Grátis</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <FormFreteGratis />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
