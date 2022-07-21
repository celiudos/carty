import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function CPFCNPJ() {
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
              <Typography>CPF/CNPJ</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Representação Legal
            </Typography>
            <Typography gutterBottom variant="h6">
              As informações visam atender às exigências da Lei do E-Commerce:
              DECRETO Nº 7.962, DE 15 DE MARÇO DE 2013
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    CPF
                  </Typography>
                  <MuiTextfield
                    sx={{ maxWidth: 200 }}
                    inputProps={{
                      placeholder: "012.345.678-90",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    CNPJ
                  </Typography>
                  <MuiTextfield
                    sx={{ maxWidth: 200 }}
                    inputProps={{
                      placeholder: "00.000.000/0001-00",
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
