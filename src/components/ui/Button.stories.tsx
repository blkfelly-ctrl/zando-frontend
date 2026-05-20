import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";



const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Bouton Principal",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Bouton Secondaire",
    variant: "secondary",
    size: "md",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Bouton Tertiaire",
     
  },
};

export const Small: Story = {
  args: {
    children: "Petit Bouton",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Grand Bouton",
    variant: "primary",
    size: "lg",
  },
};

