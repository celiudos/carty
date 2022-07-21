import listaCategorias from '@api/listaCategorias_mock.json';
import IconButtonLinkNext from '@components/buttons/IconButtonLinkNext';
import Layout from '@components/layout/Layout';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { Card, CardActions, CardHeader, CardMedia, Grid, Stack, Typography } from '@mui/material';
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

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        {LISTA_CATEGORIAS
          ? LISTA_CATEGORIAS.map((item, key) => (
              <Grid key={key} item container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h2">{item.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={"row"} spacing={2}>
                    {item.products
                      ? item.products.map((img, key) => (
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
                              <IconButtonLinkNext href="/categorias/alterar">
                                <Icon icon={"mdi:edit"} />
                              </IconButtonLinkNext>
                              <IconButtonLinkNext href="/categorias/excluir">
                                <Icon icon={"mdi:delete"} />
                              </IconButtonLinkNext>
                            </CardActions>
                          </CardCss>
                        ))
                      : null}
                  </Stack>
                </Grid>
              </Grid>
            ))
          : null}
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
