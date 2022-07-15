import { Icon } from '@iconify/react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

interface IIconLink {
  text: string;
  href: string;
  iconName: string;
}

export default function IconLink({ href, text, iconName }: IIconLink) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <List>
          <ListItem disablePadding>
            <Link href={href || ""} passHref>
              <ListItemButton component="a">
                <ListItemIcon>
                  <Icon icon={iconName} />
                </ListItemIcon>
                <ListItemText primary={text} />
                <ListItemIcon>
                  <Icon
                    style={{ marginLeft: "auto" }}
                    icon="akar-icons:chevron-right"
                  />
                </ListItemIcon>
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </>
  );
}
