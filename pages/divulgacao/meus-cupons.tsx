import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import ListaCupons from '@components/divulgacao/ListaCupons';
import MENU_ITEMS from '@components/menu/MenuItems';
import LISTA_CUPONS_ITEMS from '@components/divulgacao/ListaCuponsItems';
import { Breadcrumbs, Grid, Typography } from '@mui/material';

export default function DivulgacaoCriarCupom() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/divulgacao"
            menuItens={MENU_ITEMS.divulgacao}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Meus Cupons</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <ListaCupons
              urlBase="/divulgacao"
              listaCupons={LISTA_CUPONS_ITEMS.cupom}
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
