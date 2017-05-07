import { mount } from 'avoriaz'
import componentFactory from '!!vue-loader?inject!@/components/Component'

describe('Component.vue', () => {
it('renders a div with class active when dependency returns true', () => {
  const Component = componentFactory({})
  const wrapper = mount(Component)
  expect(wrapper.hasClass('active')).to.equal(true)
})

  it('renders a div without class active when dependency returns false', () => {
    const Component = componentFactory({
      '../lib/dependency': () => false
    })
    const wrapper = mount(Component)
    expect(wrapper.hasClass('active')).to.equal(false)
  })
})

