import FormFreteGratis from "@components/forms/FormFreteGratis";
import Layout from "@components/layout/Layout";
import { Grid } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg>
          <FormFreteGratis />
        </Grid>
      </Grid>
    </Layout>
  );
}
