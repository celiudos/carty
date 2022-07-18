import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function EnderecoEContato() {
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
              <Typography>Endereço e Contato</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Seu negócio possui um endereço fixo?
            </Typography>
            <Typography gutterBottom variant="h6">
              Inclua seu endereço, telefone e email e aumente a confiabilidade
              do seu negócio.
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Endereço
                  </Typography>
                  <MuiTextfield
                    inputProps={{
                      placeholder: "Quadra, Lote, Número",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Telefone
                  </Typography>
                  <MuiTextfield
                    inputProps={{
                      placeholder: "61 99999-9999",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Email
                  </Typography>
                  <MuiTextfield
                    inputProps={{
                      placeholder: "meuemail@gmail.com",
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
