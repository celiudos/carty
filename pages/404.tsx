import Layout from "@components/layout/Layout";
import { Box, Container, Link, Typography } from "@mui/material";
import { varBounceIn } from "@theme/animate/variants/bounce";
import { motion } from "framer-motion";

export default function Page404() {
  return (
    <Layout>
      <Container>
        <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
          <motion.div variants={varBounceIn}>
            <Typography variant="h3" paragraph>
              Página não encontrada!
            </Typography>
          </motion.div>
          <Typography sx={{ color: "text.secondary" }}>
            Desculpe, não conseguimos encontrar a página que você está
            procurando. Talvez você tenha digitado incorretamente o endereço da
            URL? Certifique-se de verificar sua ortografia.
          </Typography>

          <motion.div variants={varBounceIn}>
            <Box
              component="img"
              src="/img/illustrations/illustration_404.svg"
              sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
            />
          </motion.div>
        </Box>
      </Container>
    </Layout>
  );
}
