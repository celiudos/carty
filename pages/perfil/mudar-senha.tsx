import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import LogoImg from '@public/img/logo-fina.png';
import Image from 'next/image';
import { Grid } from '@mui/material';
import FormSenha from '@components/forms/FormSenha';

export default function PerfilMudarSenha() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo urlBase="/perfil" menuItens={MENU_ITEMS.perfil} />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <FormSenha />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
