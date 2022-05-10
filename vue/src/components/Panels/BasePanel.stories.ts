import { Meta, Story } from '@storybook/vue';
import BasePanel from './BasePanel.vue';

export default {
  title: 'Panels',
  component: BasePanel,
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { BasePanel },
  props: Object.keys(args),
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VExpansionPanels multiple><BasePanel v-bind="$props">{{content}}</BasePanel></VExpansionPanels>`,
})

export const Panel = Template.bind({});
Panel.args = {
  error: true,
  title: 'Odometors',
  message: 'this is a message',
  content: "Expansion panel content!"
};
