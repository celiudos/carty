import FormCategoria from "@components/forms/FormCategoria";
import Layout from "@components/layout/Layout";
import { Grid, List, ListItemButton, ListItemText } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg>
          <FormCategoria />
        </Grid>
      </Grid>
    </Layout>
  );
}
