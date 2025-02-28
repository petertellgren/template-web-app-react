import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { AppMenuResponsive } from "../../Navigation/AppMenuResponsive";

export interface IconMenuButtonProps {
  icon: ReactNode;
  testId?: string;
  children?: ReactElement | ReactElement[];
}

export function IconMenuButton({ icon, testId, children }: IconMenuButtonProps): ReactElement {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  return (
    <Box>
      <IconButton onClick={handleClick} data-testid={testId}>
        {icon}
      </IconButton>
      {anchorEl && (
        <AppMenuResponsive anchorEl={anchorEl} open={!!anchorEl} handleClose={handleClose}>
          {children}
        </AppMenuResponsive>
      )}
    </Box>
  );
}
