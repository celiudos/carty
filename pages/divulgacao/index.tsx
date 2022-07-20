import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Grid } from '@mui/material';

export default function Divulgacao() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/divulgacao"
            menuItens={MENU_ITEMS.divulgacao}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

