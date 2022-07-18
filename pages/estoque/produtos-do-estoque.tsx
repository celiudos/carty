import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import MenuQuantidades from '@components/menu/MenuQuantidades';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Link from 'next/link';

const ITEMS = [
  {
    img: "/img/mock/categoria-img-2.jpg",
    text: "Blusa Rendada",
    qnt: 2,
  },
  {
    img: "/img/mock/categoria-img-1.jpg",
    text: "Blusão Rose",
    qnt: 2,
  },
];

export default function ProdutosDoEstoque() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo urlBase="/estoque" menuItens={MENU_ITEMS.estoque} />
        </Grid>

        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/estoque" passHref>
                <LinkMui>
                  <Typography>Estoque</Typography>
                </LinkMui>
              </Link>
              <Typography>Produtos do Estoque</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <MenuQuantidades itens={ITEMS} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
