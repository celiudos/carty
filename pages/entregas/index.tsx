import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material';

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo urlBase="/entregas" menuItens={MENU_ITEMS.entregas} />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Entregas</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Vamos configurar suas formas de entregas?
            </Typography>
            <Typography gutterBottom variant="h6">
              Você pode optar por entregar pelos correios e/ou fazer entregas
              locais na sua região.
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Ativado" />
            </FormGroup>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
