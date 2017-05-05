import { mount } from 'avoriaz'
import Component from '@/components/Component'

describe('Component.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Component)
    expect(wrapper.hasClass('active')).to.equal(true)
  })
})

