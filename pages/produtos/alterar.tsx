import listaCategorias from '@api/listaCategorias_mock.json';
import IconButtonLinkNext from '@components/buttons/IconButtonLinkNext';
import MuiTextfield from '@components/forms/fields/MuiTextfield';
import Layout from '@components/layout/Layout';
import { Icon } from '@iconify/react';
import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  Link as LinkMui,
  MenuItem,
  Select,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import Image from 'next/image';
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
            <Typography>Alterar</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item container xs={12} spacing={2}>
          <Grid item>
            <Typography variant="h2">Alterar</Typography>
            <Typography variant="caption">{PRODUTO.title}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <form>
            <Grid container spacing={2}>
              <Grid item>
                <Stack direction={"row"} spacing={2}>
                  {LISTA_CATEGORIAS[0]
                    ? LISTA_CATEGORIAS[0].products.map((img, key) => (
                        <CardCss key={key}>
                          <CardHeader title={img.title} />
                          <CardMediaCss>
                            <Image
                              src={img.src}
                              alt={img.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </CardMediaCss>
                          <CardActions disableSpacing>
                            <IconButtonLinkNext href="/produtos/alterar">
                              <Icon icon={"mdi:edit"} />
                            </IconButtonLinkNext>
                            <IconButtonLinkNext href="/">
                              <Icon icon={"mdi:delete"} />
                            </IconButtonLinkNext>
                          </CardActions>
                        </CardCss>
                      ))
                    : null}
                  <BtnCss variant="outlined">
                    <Icon icon={"mdi:plus"} height={48} />
                  </BtnCss>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Nome
                </Typography>
                <MuiTextfield
                  inputProps={{
                    placeholder: "Calça Naples",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Preço de tabela
                </Typography>
                <MuiTextfield
                  sx={{ width: "100px" }}
                  inputProps={{
                    placeholder: "259,99",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Preço de venda
                </Typography>
                <MuiTextfield
                  sx={{ width: "100px" }}
                  inputProps={{
                    placeholder: "239,99",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Descrição
                </Typography>
                <MuiTextfield
                  multiline
                  minRows={4}
                  inputProps={{
                    placeholder: "Produto de calça jeans etc...",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Nome do usuário
                </Typography>
                <FormControl fullWidth>
                  <InputLabel id="categoria-produto">Categoria</InputLabel>
                  <Select
                    labelId="categoria-produto"
                    id="demo-simple-select"
                    label="Categoria"
                  >
                    <MenuItem value={10}>Saias</MenuItem>
                    <MenuItem value={20}>Macacão</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Comprimento (cm)
                </Typography>
                <MuiTextfield
                  sx={{ width: "100px" }}
                  inputProps={{
                    placeholder: "10",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Largura (cm)
                </Typography>
                <MuiTextfield
                  sx={{ width: "100px" }}
                  inputProps={{
                    placeholder: "20",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Altura (cm)
                </Typography>
                <MuiTextfield
                  sx={{ width: "100px" }}
                  inputProps={{
                    placeholder: "5",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" component="legend">
                  Peso (quilogramas)
                </Typography>
                <MuiTextfield
                  sx={{ width: "100px" }}
                  inputProps={{
                    placeholder: "1000",
                  }}
                />
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

const BtnCss = styled(Button)`
  height: 250px;
  width: 200px;
`;

const CardCss = styled(Card)`
  height: 250px;
  width: 200px;
`;

const CardMediaCss = styled(CardMedia)`
  position: relative;
  width: 100%;
  height: 50%;
`;
