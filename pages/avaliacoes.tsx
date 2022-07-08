import FormAvaliacao from "@components/forms/FormAvaliacao";
import Layout from "@components/layout/Layout";
import { Grid, List, ListItemButton, ListItemText } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <List component="nav">
            <ListItemButton>
              <ListItemText primary="Formulário" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid item lg>
          <FormAvaliacao />
        </Grid>
      </Grid>
    </Layout>
  );
}
