import { shallowMount } from '@vue/test-utils';
import Hello from './Hello.vue';

describe('Hello.vue', () => {
  test('Hello component test', () => {
    const name = 'World';
    const wrapper = shallowMount(Hello, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(`Hello ${name}!`);
    expect(wrapper).toMatchSnapshot();
  });
});
