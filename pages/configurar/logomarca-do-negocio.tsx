import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Grid, Link as LinkMui, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function LogomarcaDoNegocio() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/configurar"
            menuItens={MENU_ITEMS.configurar}
          />
        </Grid>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/configurar" passHref>
                <LinkMui>
                  <Typography>Configurar</Typography>
                </LinkMui>
              </Link>
              <Typography>Logomarca do Negócio</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Deseja alterar a logomarca?
            </Typography>
            <Typography gutterBottom variant="h6">
              Faça upload do arquivo a partir do seu celular.
            </Typography>

            <Image
              src={"/img/mock/categoria-img-2.jpg"}
              width={300}
              height={300}
              alt="Imagem Exemplo"
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
