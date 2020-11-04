import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: '',
    description: '',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'title basic',
  description: 'description basic',
};

export const Default: Story = (args) => <Main {...args} />;
//'React Avançado'
//'Description','TypeScript, ReactJS, NestJS e Styled Components'
