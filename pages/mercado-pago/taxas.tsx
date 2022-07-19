import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Button, Card, CardHeader, Grid, Stack, Typography } from '@mui/material';

export default function Taxas() {
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
              <Typography> Taxas do Mercado Pago</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Taxas do Mercado Pago
            </Typography>
            <Typography gutterBottom variant="h6">
              O Mercado Pago cobra uma taxa sobre cada pagamento que você
              receber quando o cliente opta por finalizar o pagamento utilizando
              a integração do Mercado Pago.
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Função crédito
                  </Typography>
                  <Typography variant="h6" component="legend">
                    Dinheiro disponível em:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={"row"} spacing={2}>
                    <Card sx={{ width: 100 }}>
                      <CardHeader
                        title="4,99%"
                        subheader="Na hora"
                      ></CardHeader>
                    </Card>
                    <Card sx={{ width: 100 }}>
                      <CardHeader
                        title="4,49%"
                        subheader="14 dias"
                      ></CardHeader>
                    </Card>
                    <Card sx={{ width: 100 }}>
                      <CardHeader
                        title="3,49%"
                        subheader="30 dias"
                      ></CardHeader>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="legend">
                    Boleto Bancário
                  </Typography>
                  <Typography variant="h6" component="legend">
                    Dinheiro disponível em:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={"row"} spacing={2}>
                    <Card sx={{ width: 100 }}>
                      <CardHeader title="3,49%" subheader="3 dias"></CardHeader>
                    </Card>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained" type="submit">
                      Estou ciente
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
