import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import BasePanel from './BasePanel.vue';

// Utilities

describe('BasePanel.vue', () => {
  const localVue = createLocalVue();
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vMount = (component: any, props: Record<string, any>, m = mount) => m(component, {
    localVue,
    vuetify,
    propsData: props,
  });

  it('expansion panel header includes title and message', () => {
    const wrapper = vMount(
      BasePanel,
      {
        title: 'Odometers',
        message: 'this is a message',
        content: 'Expansion panel content!',
      },
      shallowMount,
    );
    expect(wrapper.text()).toContain('Odometers');
    expect(wrapper.text()).toContain('this is a message');
  });

  it('should be red when error', () => {
    const wrapper = vMount(BasePanel, {
      error: true,
    });

    const header = wrapper.find('.v-expansion-panel-header').element as HTMLElement;
    expect(header.style.backgroundColor).toBe('rgb(252, 232, 232)');
  });
});
