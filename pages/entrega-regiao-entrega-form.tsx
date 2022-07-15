import FormEntregaRegiao from "@components/forms/FormEntregaRegiao";
import Layout from "@components/layout/Layout";
import { Grid } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg>
          <FormEntregaRegiao />
        </Grid>
      </Grid>
    </Layout>
  );
}
