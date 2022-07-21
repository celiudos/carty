import ButtonLinkNext from "@components/buttons/ButtonLinkNext";
import MuiTextfield from "@components/forms/fields/MuiTextfield";
import Layout from "@components/layout/Layout";
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Grid, Typography } from "@mui/material";

export default function CategoriasAgruparNome() {
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
              Digite o nome do grupo da categoria que você deseja criar
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="legend">
              Um grupo pode agrupar várias categorias.
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <MuiTextfield />
        </Grid>
          <Grid item>
            <ButtonLinkNext
              href="/categorias/agrupar-acao"
              variant="contained"
              color="primary"
            >
              Próximo
            </ButtonLinkNext>
            <ButtonLinkNext
              href="/categorias/agrupar"
              variant="contained"
              color="secondary"
            >
              Voltar
            </ButtonLinkNext>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
