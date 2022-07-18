import { Icon } from '@iconify/react';
import {
  Avatar,
  Badge,
  Box,
  Drawer,
  Grid,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoImg from '@public/img/logo-fina.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MENU = [
  { label: "Home", badgeCount: 0, icon: "bi:house", href: "/" },
  { label: "Produtos", badgeCount: 0, icon: "bi:box", href: "/produtos" },
  {
    label: "Categorias",
    badgeCount: 0,
    icon: "bx:label",
    href: "/categorias",
  },
  {
    label: "Divulgação",
    badgeCount: 0,
    icon: "ant-design:share-alt-outlined",
    href: "/divulgacao",
  },
  {
    label: "Configurar",
    badgeCount: 0,
    icon: "icon-park-outline:config",
    href: "/configurar",
  },
  {
    label: "Estoque",
    badgeCount: 0,
    icon: "akar-icons:shipping-box-v2",
    href: "/estoque",
  },
  { label: "Entregas", badgeCount: 0, icon: "bi:truck", href: "/entregas" },
  {
    label: "Avaliações",
    badgeCount: 0,
    icon: "akar-icons:star",
    href: "/avaliacoes",
  },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const paginaAtual = MENU.slice(1).find((item) =>
    router.pathname.startsWith(item.href)
  ) || {
    href: "/",
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  return (
    <>
      <AppBar position="static" elevation={0} component={"div"}>
        <Toolbar>
          <Grid container mt={3}>
            <Grid item container alignItems={"center"}>
              <Grid item xs={6}>
                <Image src={LogoImg} width={80} height={40} alt="Logo" />
              </Grid>
              <Grid item container spacing={2} xs={6} justifyContent="flex-end">
                <Grid item>
                  <Badge badgeContent={40} color="primary">
                    <Link href="/pedidos" passHref>
                      <IconButton title="Pedidos">
                        <Icon icon={"humbleicons:user-asking"} height="24" />
                      </IconButton>
                    </Link>
                  </Badge>
                </Grid>
                <Grid item>
                  <Link href="http://minhaloja.carty.com.br" passHref>
                    <IconButton title="Minha Loja">
                      <Icon icon={"bx:store-alt"} height="24" />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <MenuUsuario />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Grid item>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={paginaAtual.href}
                    onChange={handleChange}
                    aria-label="menu principal"
                  >
                    {MENU
                      ? MENU.map((item, key) => (
                          <Tab
                            value={item.href}
                            key={key}
                            label={
                              <Badge
                                badgeContent={item.badgeCount}
                                color="primary"
                              >
                                <Box py={1}>{item.label}</Box>
                              </Badge>
                            }
                            icon={<Icon icon={item.icon} height="16" />}
                            iconPosition="start"
                            {...a11yProps(key)}
                          />
                        ))
                      : null}
                  </Tabs>
                </Box>
              </Grid>
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
    </>
  );
}

function MenuUsuario() {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Abrir configurações">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/img/mock/user.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
