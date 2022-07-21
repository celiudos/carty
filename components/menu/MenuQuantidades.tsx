import MuiTextfield from '@components/forms/fields/MuiTextfield';
import { Icon } from '@iconify/react';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import Image from 'next/image';

export default function MenuQuantidades({ itens }: { itens: any }): any {
  return (
    <List>
      {itens
        ? itens.map((item: any, key: any) => (
            <ListItem
              key={key}
              divider
              secondaryAction={<BtnsAlterarQnt qnt={item.qnt} />}
            >
              <ListItemAvatar>
                <Avatar alt={item.txt}>
                  <Image src={item.img} width={60} height={60} alt={item.txt} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.text} />
            </ListItem>
          ))
        : null}
    </List>
  );
}

function BtnsAlterarQnt({ qnt = 0 }) {
  return (
    <Stack direction="row">
      <IconButton>
        <Icon icon="akar-icons:circle-minus" />
      </IconButton>
      <MuiTextfield
        defaultValue={qnt}
        sx={{ width: 60 }}
        inputProps={{
          placeholder: "0",
          style: { textAlign: "center" },
        }}
      />
      <IconButton>
        <Icon icon="akar-icons:circle-plus" />
      </IconButton>
    </Stack>
  );
}
