import { Icon } from '@iconify/react';
import { List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { useState } from 'react';

export default function MenuSwitch({ itens }: { itens: any }): any {
  return (
    <List>
      {itens
        ? itens.map((item: any, key: any) => (
            <MenuItemSwitch key={key} item={item} />
          ))
        : null}
    </List>
  );
}

function MenuItemSwitch({ item }: { item: any }) {
  const [checked, setChecked] = useState(item.ativo);

  return (
    <ListItemButton
      role={undefined}
      divider
      onClick={() => setChecked(!checked)}
    >
      <ListItemIcon>
        <Icon icon={item.icon} width={24} />
      </ListItemIcon>
      <ListItemText primary={item.text} />
      <Switch aria-label="ativar-item" checked={checked} />
    </ListItemButton>
  );
}
