import FormCredenciais from '@components/forms/FormCredenciais';
import Layout from '@components/layout/Layout';

import { Breadcrumbs, Grid, Typography } from '@mui/material';

export default function MercadoPagoCredenciais() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Credenciais</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <FormCredenciais />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

