import ButtonLinkNext from '@components/buttons/ButtonLinkNext';
import Layout from '@components/layout/Layout';
import MENU_ITEMS from '@components/menu/MenuItems';
import { Icon } from '@iconify/react';
import { Breadcrumbs, Card, CardActions, CardHeader, Grid, Stack, Switch, Typography } from '@mui/material';

export default function Index() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid container item lg alignContent={"flex-start"} spacing={2}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Entregas</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h2">
              Vamos configurar suas formas de entregas?
            </Typography>
            <Typography gutterBottom variant="h6">
              Você pode optar por entregar pelos correios e/ou fazer entregas
              locais na sua região.
            </Typography>

            <Stack direction="row" spacing={2}>
              {MENU_ITEMS.entregas
                ? MENU_ITEMS.entregas.map((item, key) => (
                    <Card key={key}>
                      <CardHeader
                        avatar={<Icon icon={item.icon} fontSize={24} />}
                        title={item.text}
                        titleTypographyProps={{
                          variant: "h5",
                        }}
                        action={<Switch />}
                      />
                      <CardActions>
                        <ButtonLinkNext href={"/entregas" + item.url}>
                          Ver mais
                        </ButtonLinkNext>
                      </CardActions>
                    </Card>
                  ))
                : null}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
