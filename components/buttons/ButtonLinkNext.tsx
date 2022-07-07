import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

export default function ButtonLinkNext({ ...props }: ButtonProps) {
  return (
    <Link href={props.href || ""} passHref>
      <Button {...props}>{props.children}</Button>
    </Link>
  );
}
