import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { Badge, Button, ButtonProps, Stack } from "@mui/material";

export default function SquaredBtn({
  badgeCount = 0,
  children,
  ...props
}: ButtonProps & { badgeCount?: number }) {
  return (
    <Badge badgeContent={badgeCount} color="primary">
      <ButtonCss variant="outlined" {...props}>
        <Stack spacing={1} alignItems="center" p={2}>
          {children}
        </Stack>
      </ButtonCss>
    </Badge>
  );
}
const ButtonCss = styled(Button)`
  width: 150px;
  height: 150px;
`;
