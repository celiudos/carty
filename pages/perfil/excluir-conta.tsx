import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Grid } from '@mui/material';
import FormSenha from '@components/forms/FormSenha';
import FormExcluirConta from '@components/forms/FormExcluirConta';

export default function PerfilExcluirConta() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo urlBase="/perfil" menuItens={MENU_ITEMS.perfil} />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <FormExcluirConta />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
