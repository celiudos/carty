import ButtonLinkNext from "@components/buttons/ButtonLinkNext";
import WidgetChart from "@components/charts/WidgetChart";
import Layout from "@components/layout/Layout";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { CardHeader } from "@mui/material";
import {
  Card,
  Chip,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ImgExemplo from "@public/img/mock/img-example-1.jpg";
import Image from "next/image";
import listaCategorias from "@api/listaCategorias_mock.json";
import { keyBy } from "lodash";
import IconButtonLinkNext from "@components/buttons/IconButtonLinkNext";
import styled from "@emotion/styled";

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
                            {/* <CardContent>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                This impressive paella is a perfect party dish
                                and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the
                                mussels, if you like.
                              </Typography>
                            </CardContent> */}
                            <CardActions disableSpacing>
                              <IconButtonLinkNext href="/alterar">
                                <Icon icon={"mdi:edit"} />
                              </IconButtonLinkNext>
                              <IconButtonLinkNext href="/excluir">
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
