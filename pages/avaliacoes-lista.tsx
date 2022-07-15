import AvaliacaoItem from "@components/avaliacoes/AvaliacaoItem";
import Layout from "@components/layout/Layout";
import { Grid } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Grid>
        <AvaliacaoItem
          title="Achei uma maravilha!"
          rating={5}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio velit quis laborum cumque accusamus necessitatibus sunt, incidunt, minus ut amet iste reiciendis non deserunt sapiente? Rerum iusto quia vero facere."
          user="João"
          id="1"
        />
        <AvaliacaoItem
          title="Achei uma maravilha!"
          rating={5}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio velit quis laborum cumque accusamus necessitatibus sunt, incidunt, minus ut amet iste reiciendis non deserunt sapiente? Rerum iusto quia vero facere.!"
          user="João"
          id="1"
        />
        <AvaliacaoItem
          title="Achei uma maravilha!"
          rating={5}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio velit quis laborum cumque accusamus necessitatibus sunt, incidunt, minus ut amet iste reiciendis non deserunt sapiente? Rerum iusto quia vero facere."
          user="João"
          id="1"
        />
      </Grid>
    </Layout>
  );
}

