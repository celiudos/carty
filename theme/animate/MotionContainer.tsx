// material
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { varWrapEnter } from "./variants/Wrap";
//

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  initial: boolean | string;
  children: JSX.Element;
  other?: JSX.ElementAttributesProperty;
};

export default function MotionContainer({
  open,
  children,
  initial = false,
  ...other
}: Props) {
  return (
    <Box
      component={motion.div}
      initial={initial}
      animate={open ? "animate" : "exit"}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
