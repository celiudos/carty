import ButtonLinkNext from "@components/buttons/ButtonLinkNext";
import FormCategoriaRenomear from "@components/forms/FormCategoriaRenomear";
import Layout from "@components/layout/Layout";
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Button, Grid, Typography } from "@mui/material";

export default function CategoriasAgrupar() {
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
          <Typography variant="h2">
            Você quer agrupar suas categorias?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="legend">
            Agora você pode criar grupos de categorias. Clique no botão abaixo para iniciar.
          </Typography>
        </Grid>
          <Grid item>
            <ButtonLinkNext
              href="/categorias/agrupar-nome"
              variant="contained"
              color="primary"
            >
              Agrupar
            </ButtonLinkNext>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
