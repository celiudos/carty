import { Drawer, Grid, ListItemText, MenuItem, MenuList } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "@public/img/logo-fina.png";
import { useState } from "react";
import styled from "@emotion/styled";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Grid container alignItems={"center"} justifyContent="center">
            <Grid item>
              <Image src={LogoImg} width={80} height={40} alt="Logo" />
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
        </MenuList>
      </Drawer>
    </header>
  );
}
