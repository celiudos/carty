import styled from "@emotion/styled";
import IconLink from "@components/iconLink/IconLink";
import Layout from "@components/layout/Layout";
import { FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg>
          <TypographyCSS variant="h2">Avaliações dos Clientes</TypographyCSS>
          <TypographyCSS variant="h6">A prova social é fundamental para converter visitas a sua loja em vendas. Envie o link de avaliação para os seus clientes na tela de pedidos, após a conclusão do pedido.</TypographyCSS>
          <FormGroupCSS>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroupCSS>
          <IconLink iconName='akar-icons:star' text='Avaliações' href='avaliacoes'/>
        </Grid>
      </Grid>
    </Layout>
  );
}
const TypographyCSS = styled(Typography)`
 padding: 24px 0
`;

const FormGroupCSS = styled(FormGroup)`
  padding: 24px 0
`
