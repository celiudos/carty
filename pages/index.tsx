import Layout from "@components/layout/Layout";
import { Grid } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item md={12}>
          Teste
        </Grid>
      </Grid>
    </Layout>
  );
}
