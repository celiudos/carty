import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { Divider, Box, Typography } from "@mui/material"
import Image from "next/image";

interface IEstoqueItem {
  title: string;
  quantity: number;
  image?: string;
  id?: string;
}

export default function EstoqueItem({title, quantity, image, id}: IEstoqueItem) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", px: '24px' }}>
        <Image
          src="/img/mock/categoria-img-2.jpg"
          width={50}
          height={50}
          alt="image name"
          objectFit="cover"
        />
        <Typography sx={{ ml: "24px" }}>{title}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          <IconCss icon="akar-icons:circle-minus"></IconCss>
          <Typography sx={{ mx: "8px" }}>{quantity}</Typography>
          <IconCss icon="akar-icons:circle-plus"></IconCss>
        </Box>
      </Box>
      <Divider sx={{my: '12px', mx: '24px'}}/>
    </>
  );
}

const IconCss = styled(Icon)`
  cursor: pointer;
`