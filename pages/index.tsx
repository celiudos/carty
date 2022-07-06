import Layout from "@components/layout/Layout";
import SquaredBtn from "@components/SquaredBtn";
import { Icon } from "@iconify/react";
import { Box, CardContent } from "@mui/material";
import { CardHeader } from "@mui/material";
import {
  Card,
  Chip,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ImgExemplo from "@public/img/img-example-1.jpg";
import Image from "next/image";

export default function Index() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Grid container justifyContent={"center"} spacing={2}>
          <Grid item>
            <Stack direction="row" spacing={3}>
              <Stack>
                <Typography variant="h1">Minha Loja Virtual</Typography>
                <Link href="">
                  <Typography>mystore.carty.com.br</Typography>
                </Link>
              </Stack>
              <Stack justifyContent={"center"}>
                <Image
                  src={ImgExemplo}
                  width={60}
                  height={60}
                  alt="Imagem Exemplo"
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-between"} spacing={2} mt={3}>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"bi:box"} height="40" />
              <div>Lista de Produtos</div>
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"bx:store-alt"} height="40" />
              <div>Visualizar Minha Loja</div>
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"akar-icons:arrow-shuffle"} height="40" />
              <div>Minhas Categorias</div>
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn badgeCount={241}>
              <Icon icon={"bi:bag-check"} height="40" />
              <div>Meus Pedidos</div>
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"ant-design:share-alt-outlined"} height="40" />
              <div>Divulgação da Loja</div>
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"icon-park-outline:config"} height="40" />
              <div>Configurar Minha Loja</div>
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"akar-icons:shipping-box-v2"} height="40" />
              <div>Controle de Estoque</div>
              <Chip label="PREMIUM" />
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"bi:truck"} height="40" />
              <div>Formas de Entrega</div>
              <Chip label="PREMIUM" />
            </SquaredBtn>
          </Grid>
          <Grid item>
            <SquaredBtn>
              <Icon icon={"akar-icons:star"} height="40" />
              <div>Avaliação dos Clientes</div>
              <Chip label="PREMIUM" />
            </SquaredBtn>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} mt={3}>
          <Grid item>
            <Card sx={{ maxWidth: 400 }}>
              <CardHeader
                avatar={<Icon icon="arcticons:mercado-libre" fontSize={42} />}
                title="Pagamento na loja"
                titleTypographyProps={{
                  variant: "h3",
                }}
              />
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  Integre agora com o Mercado Pago para receber pagamentos dos
                  seus clientes na sua loja.
                </Typography>
                <Stack justifyContent={"center"} alignItems="center" mt={2}>
                  <Chip label="PRO" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
