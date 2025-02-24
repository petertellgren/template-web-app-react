import type { ReactElement } from "react";
import { useContext } from "react";
import type { PaletteMode } from "@mui/material";
import { ThemeToggle } from "shared-ui";
import { ThemeModeContext } from "../../theme/ThemeModeContext";

export function ThemeToggleExt(): ReactElement {
  const { mode, toggleMode } = useContext(ThemeModeContext);

  function handleToggle(mode: PaletteMode): void {
    toggleMode(mode);
  }

  return <ThemeToggle defaultMode={mode} onToggle={handleToggle} />;
}
