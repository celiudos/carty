import styled from "@emotion/styled";
import { Typography, Rating, Button, Box, Grid, Divider } from "@mui/material";

interface IAvaliacaoItem {
  title: string;
  rating: number;
  description: string;
  user: string;
  id?: string;
}

export default function AvaliacaoItem({ title, rating, description, id, user }: IAvaliacaoItem) {
  return (
    <Grid sx={{ mx: "16px" }}>
      <Typography variant="h5">{title}</Typography>
      <Rating name="size-large" value={rating} />
      <Typography>{description}</Typography>
      <Typography>{user}</Typography>
      <Box sx={{display: 'flex', gap: '8px'}}>

      <ButtonCSS variant="outlined">MOSTRAR</ButtonCSS>
      <ButtonCSS variant="outlined">OCULTAR</ButtonCSS>
      </Box>
      <Divider sx={{ mb: "16px" }} />
    </Grid>
  );
}

const ButtonCSS = styled(Button)`
  border-radius: 8px;
  height: 1rem;
  margin: 8px 0;
`

    