import ButtonLinkNext from "@components/buttons/ButtonLinkNext";
import WidgetChart from "@components/charts/WidgetChart";
import Layout from "@components/layout/Layout";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
} from "@mui/material";
import ImgExemplo from "@public/img/mock/img-example-1.jpg";
import Image from "next/image";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid container item lg={4} alignContent="flex-start" spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar alt="Remy Sharp">
                    <Image
                      src={ImgExemplo}
                      width={60}
                      height={60}
                      alt="Imagem Exemplo"
                    />
                  </Avatar>
                }
                title="Minha Loja"
                subheader="Veja como ficou seu estabelecimento virtual"
                titleTypographyProps={{
                  variant: "h3",
                }}
              />
              <CardActions>
                <ButtonLinkNext href="https://mystore.carty.com.br">
                  Acessar
                </ButtonLinkNext>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                avatar={<Icon icon="arcticons:mercado-libre" fontSize={42} />}
                title="Pagamento na loja"
                subheader="Integre agora com o Mercado Pago para receber pagamentos dos
                seus clientes na sua loja"
                titleTypographyProps={{
                  variant: "h3",
                }}
              />
              <CardContent sx={{ paddingTop: 0, textAlign: "center" }}>
                <Chip label="PRO" />
              </CardContent>
              <CardActions>
                <ButtonLinkNext href="https://mystore.carty.com.br">
                  Virar PRO
                </ButtonLinkNext>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid container item lg={8} spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                avatar={<Icon icon="bx:line-chart" fontSize={42} />}
                title="Visitas de Clientes"
                subheader="Divulgue o endereço da sua loja virtual e aumente as vendas"
              />
              <CardContent>
                <WidgetChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                avatar={<Icon icon="bx:line-chart" fontSize={42} />}
                title="Vendas"
                subheader="Capricha no mkt e bóra bóra!"
              />
              <CardContent>
                <WidgetChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
