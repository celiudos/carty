import { Icon } from '@iconify/react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

interface IIconLink {
  text: string;
  href: string;
  iconName: string;
}

export default function IconLink({ href, text, iconName }: IIconLink) {
  return (
    <>
      <Link href={href || ""} passHref>
        <Box>
          <List>
            <ListItemButton divider>
              <ListItemIcon>
                <Icon icon={iconName} />
              </ListItemIcon>
              <ListItemText primary={text} />
              <Icon icon="akar-icons:chevron-right" />
            </ListItemButton>
          </List>
        </Box>
      </Link>
    </>
  );
}
