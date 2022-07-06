import { Icon } from "@iconify/react";
import {
  Drawer,
  Grid,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Grid container alignItems={"center"} justifyContent="space-between">
            <Grid item>
              <Stack direction="row" alignItems={"center"}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <Icon icon={"mdi:menu"} />
                </IconButton>
                <Typography variant="h5">{/* {AppConfig.titulo} */}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={sidebarOpen} onClick={() => setSidebarOpen(false)}>
        <MenuList sx={{ width: 250 }}>
          <Link href={"/"} passHref>
            <MenuItem color="inherit">
              <ListItemText>Home</ListItemText>
            </MenuItem>
          </Link>
          <Link href={"/integra"} passHref>
            <MenuItem color="inherit">Íntegra</MenuItem>
          </Link>
          <Link href={"/documento"} passHref>
            <MenuItem color="inherit">Formulário</MenuItem>
          </Link>
          <Link href={"/acoes"} passHref>
            <MenuItem color="inherit">Ações</MenuItem>
          </Link>
          <Link href={"/prever-grupo"} passHref>
            <MenuItem color="inherit">Prever Grupos temáticos</MenuItem>
          </Link>
        </MenuList>
      </Drawer>
    </header>
  );
}
