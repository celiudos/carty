import { Icon } from "@iconify/react";
import { Typography, Divider, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

interface IIconLink {
  text: string
  href: string
  iconName: string
}

export default function IconLink({ href, text, iconName }: IIconLink) {
  return (
    <>
      <Link href={href || ""} passHref>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
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
            </ListItem>
            <Divider />
          </List>
        </Box>
      </Link>
    </>
  );
}