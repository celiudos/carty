import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Avatar, Grid, Typography } from '@mui/material';

export default function Perfil() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/perfil"
            menuItens={MENU_ITEMS.perfil}
          />
        </Grid>
        <Grid container item lg alignContent="flex-start" direction='column' spacing={2}>
          <Grid item xs={12} >
            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="/img/mock/user.jpg"/>
            <Typography mt={2} gutterBottom variant="h2">
              Plano PRO
            </Typography>
            <Typography gutterBottom variant="caption">
              Renovação automática. Cancele a qualquer momento.
            </Typography>         
            <Typography mt={2} gutterBottom variant="h6">
              Válido até 26/07/2023
            </Typography>
            <Typography gutterBottom variant="h6">
              500 produtos
            </Typography>
            <Typography gutterBottom variant="h6">
              Email:eva@carty.com.br
            </Typography>
               
          </Grid>          
        </Grid>
      </Grid>
    </Layout>
  );
}

