import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderRadius: 10,
  background: theme.palette.background.default,
  padding: theme.spacing(2),
}));

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DocumentationLayout({ label, children }: Props): ReactElement {
  return (
    <Box>
      <Typography variant="h1">{label}</Typography>
      <br />
      <StyledBox>{children}</StyledBox>
    </Box>
  );
}
