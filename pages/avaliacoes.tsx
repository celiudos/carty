import ButtonLinkNext from "@components/buttons/ButtonLinkNext";
import WidgetChart from "@components/charts/WidgetChart";
import Layout from "@components/layout/Layout";
import SquareBtn from "@components/SquareBtn";
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
import FormAvaliacao from "@components/forms/FormAvaliacao";

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
        <FormAvaliacao />
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
