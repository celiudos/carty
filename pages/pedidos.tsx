import listaCategorias from "@api/listaCategorias_mock.json";
import Layout from "@components/layout/Layout";
import { Grid, Typography } from "@mui/material";

interface Categories {
  title: string;
  products: Product[];
}

interface Product {
  title: string;
  src: string;
}
const LISTA_CATEGORIAS = listaCategorias as unknown as Categories[];

export default function Pedidos() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item container xs={12}>
          <Typography variant="h2">Pedidos</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
