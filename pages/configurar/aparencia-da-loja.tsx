import Layout from '@components/layout/Layout';
import MenuEsquerdo from '@components/menu/MenuEsquerdo';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Breadcrumbs, Chip, Grid, Link as LinkMui, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function AparenciaDaLoja() {
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
              <Typography>Aparência da Loja</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Escolha o modelo da sua loja virtual
            </Typography>
            <Typography gutterBottom variant="h6">
              Arraste para o lado para mais opções
            </Typography>

            <form>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Stack spacing={1} alignItems="center">
                    <Typography variant="h5" component="legend">
                      Dark
                    </Typography>
                    <Chip label="PREMIUM" />
                    <div>
                      <Image
                        src={"/img/mock/categoria-img-2.jpg"}
                        width={300}
                        height={300}
                        alt="Imagem Exemplo"
                      />
                    </div>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
