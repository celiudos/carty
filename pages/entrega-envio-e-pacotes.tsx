import IconLink from "@components/iconLink/IconLink";
import Layout from "@components/layout/Layout";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <IconLink
            iconName="ant-design:mail-outlined"
            text="Envio pelos Correios"
            href="entregas"
          />
          <IconLink
            iconName="akar-icons:location"
            text="Entrega Local"
            href="entregas"
          />
          <IconLink
            iconName="akar-icons:arrow-up-right"
            text="Retirar na Loja"
            href="entregas"
          />
          <IconLink
            iconName="bi:currency-dollar"
            text="Frete Grátis"
            href="entregas"
          />
        </Grid>
        <Grid item lg>
          <Typography gutterBottom variant="h2">
            Vamos configurar suas formas de entregas?
          </Typography>
          <Typography gutterBottom variant="h6">
            Você pode optar por entregar pelos correios e/ou fazer entregas locais na sua região.
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroup>
        </Grid>
      </Grid>
    </Layout>
  );
}
