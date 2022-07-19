import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material';

export default function MercadoPagoIntegracao() {
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
              <Typography>Mercado Pago</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Integração Mercado Pago
            </Typography>
            <Typography gutterBottom variant="h6">
              A integração do Mercado Pago permite que você possa oferecer uma
              opção de pagamento totalmente no seu site. Toda a experiência
              acontece na sua loja para que os clientes não tenham que sair no
              momento de realizar a compra.
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Ativado" />
            </FormGroup>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

