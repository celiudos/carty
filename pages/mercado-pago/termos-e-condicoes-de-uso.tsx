import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Box, Breadcrumbs, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export default function MercadoPagoTermos() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/mercado-pago"
            menuItens={MENU_ITEMS.mercadoPago_integracao}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Termos e Condições de Uso</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Termos e Condições de Uso do Mercado Pago
            </Typography>
            <Typography gutterBottom variant="h6">
              Clicando no botão abaixo você concorda com os termos de uso do
              Mercado Pago. O termo de uso pode ser encontrado na página do
              Mercado Pago ou no link abaixo:
            </Typography>
            <Typography gutterBottom variant="h6">
              <Link href="/">Termos e Condições de Uso do Mercado Pago</Link>
            </Typography>
            <Box mt={2}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked color="success" />}
                  label=" EU CONCORDO"
                />
              </FormGroup>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
