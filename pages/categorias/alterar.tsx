import FormCategoria from "@components/forms/FormCategoria";
import Layout from "@components/layout/Layout";
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Grid } from "@mui/material";

export default function CategoriasAlterar() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/categorias"
            menuItens={MENU_ITEMS.categorias}
          />
        </Grid>

        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <FormCategoria />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
