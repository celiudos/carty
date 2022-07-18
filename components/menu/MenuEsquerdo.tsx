import { Icon } from '@iconify/react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

export default function MenuEsquerdo({
  menuItens,
  urlBase = "",
}: {
  menuItens: IMenuItens[];
  urlBase?: string;
}): any {
  return (
    <List>
      {menuItens
        ? menuItens.map((item: any, key: any) => (
            <Link href={`${urlBase}${item.url}`} passHref key={key}>
              <ListItemButton divider>
                <ListItemIcon>
                  <Icon icon={item.icon} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
                <Icon icon={"mdi:chevron-right"} />
              </ListItemButton>
            </Link>
          ))
        : null}
    </List>
  );
}
