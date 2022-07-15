import { Box } from '@mui/material';
import Link from 'next/link';

interface IIconLink {
  text: string;
  href: string;
  iconName: string;
}

export default function IconLink({ href }: IIconLink) {
  return (
    <Link href={href || ""} passHref>
      <Box>
        {/* <List>
          {item
            ? item.map((item, key) => (
                <ListItemButton divider>
                  <ListItemIcon>
                    <Icon icon={item.iconName} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  <Icon icon={icon} />
                </ListItemButton>
              ))
            : null}
        </List> */}
      </Box>
    </Link>
  );
}

// const list = [
//   {
//     text: "Cadastrar",
//     href: "/cadastrar",
//     iconName: "mdi:plus"

//   }
// ]

// <IconLink list={list} />;
