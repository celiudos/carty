import listaCategorias from '@api/listaCategorias_mock.json';
import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import { Icon } from '@iconify/react';
import {
  Autocomplete,
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link as LinkMui,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import Link from 'next/link';

interface Categories {
  title: string;
  products: Product[];
}

interface Product {
  title: string;
  src: string;
}
const LISTA_CATEGORIAS = listaCategorias as unknown as Categories[];
const PRODUTO = LISTA_CATEGORIAS[0].products[0];

export default function Produtos() {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/produtos" passHref>
              <LinkMui>
                <Typography>Produtos</Typography>
              </LinkMui>
            </Link>
            <Typography>Variação</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item>
            <Typography variant="h2">Variação</Typography>
            <Typography variant="caption">{PRODUTO.title}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <form>
            <Grid item container spacing={2} xs={12}>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Nome
                </Typography>
                <MuiTextfield
                  inputProps={{
                    placeholder: "Cor verde",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Digite os valores possíveis
                </Typography>
                <Autocomplete
                  multiple
                  freeSolo
                  options={["Amarelo", "Verde"]}
                  defaultValue={["Azul"]}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <MuiTextfield
                      helperText="Digite o valor e aperte o botão Enter do teclado"
                      {...params}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Escolha a forma de apresentação
                </Typography>
                <ToggleButtonGroup color="primary" exclusive>
                  <ToggleButton value="1">
                    <Box sx={{ width: 100 }}>
                      <Icon icon={"mdi:crop-square"} width={48} />
                      <div>Caixa</div>
                    </Box>
                  </ToggleButton>
                  <ToggleButton value="2">
                    <Box sx={{ width: 100 }}>
                      <Icon icon={"mdi:format-list-bulleted"} width={48} />
                      <div>Lista</div>
                    </Box>
                  </ToggleButton>
                  <ToggleButton value="3">
                    <Box sx={{ width: 100 }}>
                      <Icon icon={"mdi:plus"} width={48} />
                      <div>Múltiplo</div>
                    </Box>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" type="submit">
                    Salvar
                  </Button>
                  <Button variant="text">Cancelar</Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
}
