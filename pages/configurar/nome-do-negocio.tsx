import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function NomeDoNegocio() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/configurar"
            menuItens={MENU_ITEMS.configurar}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/configurar" passHref>
                <LinkMui>
                  <Typography>Configurar</Typography>
                </LinkMui>
              </Link>
              <Typography>Nome do Negócio</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Quer mudar o nome do seu negócio?
            </Typography>
            <Typography gutterBottom variant="h6">
              O nome será apresentado com destaque para seus clientes
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Nome
                  </Typography>
                  <MuiTextfield
                    inputProps={{
                      placeholder: "Minha Loja Virtual",
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
