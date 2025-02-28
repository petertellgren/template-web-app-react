import type { StyledComponent } from "@emotion/styled";
import type { BoxProps } from "@mui/material";
import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const SearchContainer: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
}));
