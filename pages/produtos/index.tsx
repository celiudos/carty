import listaCategorias from '@api/listaCategorias_mock.json';
import IconButtonLinkNext from '@components/buttons/IconButtonLinkNext';
import ProdutosList from '@components/forms/ProdutosList';
import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { Breadcrumbs, Button, Card, CardActions, CardHeader, CardMedia, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

interface Categories {
  title: string;
  products: Product[];
}

interface Product {
  title: string;
  src: string;
}
const LISTA_CATEGORIAS = listaCategorias as unknown as Categories[];

export default function Produtos() {
  return (
    <Layout>
      <Grid container alignContent={"flex-start"} spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo urlBase="/entregas" menuItens={MENU_ITEMS.produtos} />
        </Grid>
        <Grid item lg={9}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Produtos</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item container xs={12} spacing={2}>
            <Grid item>
              <Typography variant="h2">Produtos</Typography>
              <Typography variant="caption">8 itens</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Adicionar
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ProdutosList />
          </Grid>
          <Grid item>
            <Stack direction={"row"} spacing={2}>
              {LISTA_CATEGORIAS[0]
                ? LISTA_CATEGORIAS[0].products.map((img, key) => (
                    <CardCss key={key}>
                      <CardHeader title={img.title} />
                      <CardMediaCss>
                        <Image
                          src={img.src}
                          alt={img.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </CardMediaCss>
                      <CardActions disableSpacing>
                        <IconButtonLinkNext href="/produtos/alterar">
                          <Icon icon={"mdi:edit"} />
                        </IconButtonLinkNext>
                        <IconButtonLinkNext href="/produtos/variacao">
                          <Icon icon={"ic:baseline-merge-type"} />
                        </IconButtonLinkNext>
                        <IconButtonLinkNext href="/">
                          <Icon icon={"mdi:delete"} />
                        </IconButtonLinkNext>
                      </CardActions>
                    </CardCss>
                  ))
                : null}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

const CardCss = styled(Card)`
  height: 250px;
  width: 200px;
`;

const CardMediaCss = styled(CardMedia)`
  position: relative;
  width: 100%;
  height: 50%;
`;
