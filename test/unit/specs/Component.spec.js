import Vue from 'vue'
import Component from '@/components/Component'

describe('Component.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor().$mount()
    expect(vm.$el.className).to.equal('active')
  })
})
