import React from "react";
import Avatar from "@mui/material/Avatar";
import type { ComponentStoryObj } from "@storybook/react";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggle";
import ProfileCardResponsive from "../profile/ProfileCardResponsive";
import Component from "./HeaderLayout";
import { ContentComponent } from "~/stories/data/ContentData";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Templates",
};

export const HeaderLayout: Story = {
  args: {
    headerOptions: {
      label: "This is a Header",
    },
    children: <ContentComponent />,
    headerComponents: [
      {
        key: "theme-toggle",
        component: <ThemeToggle defaultMode="light" onToggle={() => console.log("onToggle")} />,
      },
      {
        key: "avatar",
        component: {
          icon: <Avatar sx={{ width: 32, height: 32 }} />,
          MenuNode: <ProfileCardResponsive />,
        },
      },
    ],
  },
};
