import ButtonLinkNext from '@components/buttons/ButtonLinkNext';
import Layout from '@components/layout/Layout';
import { Icon } from '@iconify/react';
import { Box, Button, Grid, Typography } from '@mui/material';

export default function Avaliacoes() {
  return (
    <Layout>
      <Grid container spacing={2}>
        {/* <Grid item lg={3}>
          <MenuEsquerdo
            urlBase="/avaliacoes"
            menuItens={MENU_ITEMS.avaliacoes}
          />
        </Grid> */}
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid container item xs={12}>
            <Grid item xs={6}>
              <Typography gutterBottom variant="h2">
                <Icon icon={"akar-icons:star"} height="24" />
                <Box component={"span"} ml={2}>
                  Avaliações dos Clientes
                </Box>
              </Typography>
            </Grid>
            <Grid container item xs={6} spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button variant="contained" color="success">
                  Ativado
                </Button>
              </Grid>
              <Grid item>
                <ButtonLinkNext
                  href="/avaliacoes/avaliacao"
                  variant="contained"
                >
                  Adicionar
                </ButtonLinkNext>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h6">
              A prova social é fundamental para converter visitas a sua loja em
              vendas. Envie o link de avaliação para os seus clientes na tela de
              pedidos, após a conclusão do pedido.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
