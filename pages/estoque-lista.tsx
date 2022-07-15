import EstoqueItem from "@components/estoque/EstoqueItem";
import Layout from "@components/layout/Layout";
import {
 Box
} from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Box>
      <EstoqueItem title="Item 1" quantity={3} />
        <EstoqueItem title="Item 2" quantity={9} />
        <EstoqueItem title="Item 3" quantity={8} />
        <EstoqueItem title="Item 4" quantity={7} />
      </Box>
        
    </Layout>
  );
}
