import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, InputAdornment, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function EnderecoNaInternet() {
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
              <Typography>Endereço na Internet</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Seu endereço na Internet é seu cartão de visitas!
            </Typography>
            <Typography gutterBottom variant="h6">
              Altere o endereço na intenert da sua loja. Endereços na internet
              não podem possuir caracteres especiais.
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Endereço
                  </Typography>
                  <MuiTextfield
                    sx={{ maxWidth: 400 }}
                    inputProps={{
                      placeholder: "mystore",
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          .carty.com.br
                        </InputAdornment>
                      ),
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
