import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { Typography, Divider, Box } from "@mui/material";
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
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%', cursor: 'pointer'}}>
        <Icon icon={iconName}/>
        <Typography>{text}</Typography>
        <Icon icon="akar-icons:chevron-right" />
      </Box>
      </Link>
      <DividerCSS /> 
    </>
  );
}

const DividerCSS = styled(Divider)`
 margin-top: 12px;
 width: 50%;
`;

