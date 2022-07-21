import ButtonLinkNext from "@components/buttons/ButtonLinkNext";
import FormCategoriaRenomear from "@components/forms/FormCategoriaRenomear";
import Layout from "@components/layout/Layout";
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Button, Grid, Stack, Typography } from "@mui/material";

export default function CategoriasExcluir() {
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
            <Typography variant="h2">Deseja excluir essa categoria?</Typography>
          </Grid>
          <Grid item xs={12}>
              <Stack spacing={2} direction="row">
                <Button variant="contained" type="submit">
                  Sim
                </Button>
                <Button>Não</Button>
              </Stack>
            </Grid>
          </Grid>
      </Grid>
    </Layout>
  );
}
