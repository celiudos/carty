import { Icon } from '@iconify/react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MenuEsquerdo({
  menuItens,
  urlBase = "",
}: {
  menuItens: IMenuItens[];
  urlBase?: string;
}): any {
  const router = useRouter();
  return (
    <List>
      {menuItens
        ? menuItens.map((item: any, key: any) => {
            const urlCompleta = urlBase + item.url;
            return (
              <Link href={urlCompleta} passHref key={key}>
                <ListItemButton
                  selected={router.pathname.endsWith(urlCompleta)}
                >
                  <ListItemIcon>
                    <Icon icon={item.icon} width={24} />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            );
          })
        : null}
    </List>
  );
}
