import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, FormControlLabel, FormGroup, Grid, Link as LinkMui, Switch, Typography } from '@mui/material';
import Link from 'next/link';

export default function EntregaLocal() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/entregas/entrega-local"
            menuItens={MENU_ITEMS.entregas_entregaLocal}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/entregas" passHref>
                <LinkMui>
                  <Typography>Entregas</Typography>
                </LinkMui>
              </Link>
              <Typography>Entrega Local</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Quanto é a taxa de entrega?
            </Typography>
            <Typography gutterBottom variant="h6">
              Agora você pode definir taxa de entrega diferenciada por
              região/bairro. Informe as regiões que você realiza entrega e o
              valor da taxa de entrega.
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
