import { shallowMount } from '@vue/test-utils'
import { toggler } from '@/components/toggler'

describe('toggler', () => {
  it('change title on click', async () => {
    const wrapper = shallowMount(toggler)
    expect(wrapper.find('.text').text()).toBe('View issues')
    await wrapper.find('button.button').trigger('click')
    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
