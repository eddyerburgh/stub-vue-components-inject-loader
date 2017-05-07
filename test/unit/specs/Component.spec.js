import { mount } from 'avoriaz'
import Component from '@/components/Component'

describe('Component.vue', () => {
  it('renders a div with class active when dependency returns true', () => {
    const wrapper = mount(Component)
    expect(wrapper.hasClass('active')).to.equal(true)
  })

  it('renders a div without class active when dependency returns false', () => {
    Component.__Rewire__('dependency', () => false)
    const wrapper = mount(Component)
    expect(wrapper.hasClass('active')).to.equal(false)
    Component.__ResetDependency__('dependency')
  })
})

