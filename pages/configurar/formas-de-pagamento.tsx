import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import MenuSwitch from '@components/menu/MenuSwitch';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

const ITEMS = [
  {
    icon: "mdi:barcode",
    text: "Boleto Bancário",
    ativo: true,
  },
  {
    icon: "mdi:credit-card-outline",
    text: "Cartão de Crédido",
    ativo: true,
  },
  {
    icon: "mdi:credit-card",
    text: "Cartão de Débito",
    ativo: false,
  },
  {
    icon: "mdi:link",
    text: "Link de Pagamento",
    ativo: false,
  },
  {
    icon: "mdi:currency-usd",
    text: "Dinheiro",
    ativo: false,
  },
  {
    icon: "mdi:send-outline",
    text: "Transferência Bancária/ Pix",
    ativo: true,
  },
];

export default function FormasDePagamento() {
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
              <Typography>Formas de Pagamento</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <MenuSwitch itens={ITEMS} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
