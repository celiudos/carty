import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function RedesSociais() {
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
              <Typography>Redes Sociais</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Conecte-se às redes sociais!
            </Typography>
            <Typography gutterBottom variant="h6">
              Hoje, mais do que nunca, você precisa estar conectado às redes
              sociais! Qual o seu Instagram e Facebook?
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Instagram
                  </Typography>
                  <MuiTextfield
                    inputProps={{
                      placeholder: "siana_atelier",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Facebook
                  </Typography>
                  <MuiTextfield
                    inputProps={{
                      placeholder: "cartybr",
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
