import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ListaCupons({
  listaCupons,
  urlBase = "",
}: {
  listaCupons: IListaCuponsItems[];
  urlBase?: string;
}): any {
  const router = useRouter();
  const titleText = {
    fontSize: "16px",
    fontWeight: "bold",
  };
  return (
    <List>
      {listaCupons
        ? listaCupons.map((item: any, key: any) => {
            const urlCompleta = urlBase + item.url;
            return (
              <Link href={urlCompleta} passHref key={key}>
                <ListItemButtonCss
                  selected={router.pathname.endsWith(urlCompleta)}
                >
                  <ListItemText primaryTypographyProps={{style: titleText }} primary={item.number} />
                  <Box ml={2}>
                    <ListItemText primaryTypographyProps={{style: titleText }} primary={item.text} />
                    <ListItemText primary={item.date} />
                  </Box>
                </ListItemButtonCss>
              </Link>
            );
          })
        : null}
    </List>
  );
}

const ListItemButtonCss = styled(ListItemButton)`
  justify-content: flex-start;
`
