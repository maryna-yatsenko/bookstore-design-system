import type { Preview } from '@storybook/react';
import '../src/styles/primitives.css';
import '../src/styles/semantic.css';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
  },
};

export default preview;
