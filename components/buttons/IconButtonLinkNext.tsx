import { ButtonProps, IconButton, IconButtonProps } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function IconButtonLinkNext({
  ...props
}: IconButtonProps & ButtonProps) {
  return (
    <Link href={props.href || ""} passHref>
      <IconButton {...props}>{props.children}</IconButton>
    </Link>
  );
}
