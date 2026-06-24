import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import type { StepConfig } from './Stepper.types';

const RICH_STEPS: StepConfig[] = [
  { badge: 'Статус', badgeColor: 'white', label: 'Замовлення створено',           actor: 'Клієнт' },
  { badge: 'Платіж', badgeColor: 'gray',  label: 'Повернення коштів ініційовано', actor: 'Олександр Коваленко' },
  { badge: 'Статус', badgeColor: 'white', label: 'Замовлення скасовано',           actor: 'Клієнт' },
];

const meta = {
  title: 'Content/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      control: { type: 'range', min: 0, max: 3, step: 1 },
      description: '0-indexed active step. Value > last index = all passed.',
    },
    steps:     { table: { disable: true } },
    className: { table: { disable: true } },
    style:     { table: { disable: true } },
  },
  args: {
    steps: RICH_STEPS,
    activeStep: 1,
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
