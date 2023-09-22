import { Box, Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { CommonDecorator } from "storybook-base";
import { AlertManager as Component } from "./AlertManager";
import { AlertManagerProvider } from "./AlertManagerContext";
import { useAlertManager } from "./UseAlertManager";

const meta = {
  title: "Library/Alert/Manager",
  component: Component,
  decorators: [CommonDecorator],
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertManager = {
  args: {},
  render: (props) => {
    return (
      <AlertManagerProvider>
        <Box>
          <AddAlertComponent />
          <Component {...props} />
        </Box>
      </AlertManagerProvider>
    );
  },
} satisfies Story;

function AddAlertComponent() {
  const { addAlert } = useAlertManager();

  function handleClick() {
    addAlert({
      title: "Info title",
      text: "Info text",
    });
  }

  return <Button onClick={handleClick}>Add Alert</Button>;
}
