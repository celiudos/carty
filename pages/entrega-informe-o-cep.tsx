import FormInformeCep from "@components/forms/FormInformeCep";
import Layout from "@components/layout/Layout";
import { Grid } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg>
          <FormInformeCep />
        </Grid>
      </Grid>
    </Layout>
  );
}
