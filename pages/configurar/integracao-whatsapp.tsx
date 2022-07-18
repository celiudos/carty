import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

export default function IntegracaoWhatsapp() {
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
              <Typography>Integração Whatsapp</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Você quer receber seus pedidos no WhatsApp?
            </Typography>
            <Typography gutterBottom variant="h6">
              É mais um canal de contato com seu cliente. Se quiser basta
              preencher o seu número do zap abaixo:
            </Typography>

            <form>
              <Grid container spacing={2}>
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
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
