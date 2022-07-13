import IconLink from "@components/iconLink/IconLink";
import Layout from "@components/layout/Layout";
import { Icon } from "@iconify/react";
import {
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <IconLink
            iconName="bi:truck"
            text="Regiões de entrega"
            href="entregas"
          />
        </Grid>
        <Grid item lg>
          <Typography gutterBottom variant="h2">
            Quanto é a taxa de entrega?
          </Typography>
          <Typography gutterBottom variant="h6">
            Agora você pode definir taxa de entrega diferenciada por
            região/bairro. Informe as regiões que você realiza entrega e o valor
            da taxa de entrega.
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Ativado" />
          </FormGroup>
        </Grid>
      </Grid>
    </Layout>
  );
}
