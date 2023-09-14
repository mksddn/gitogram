import { mount } from '@vue/test-utils'
import { feed } from '@/components/feed'

describe('issues component', () => {
  it('Do emit loadIssues', async () => {
    const wrapper = mount(feed)
    await wrapper.find('button.toggler').trigger('click')
    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })

  it('render elements list', async () => {
    const issue = {
      body: 'test-body',
      user: {
        login: 'test-login'
      }
    }
    const wrapper = mount(feed, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })
    expect(wrapper.find('.comments').exists()).toBe(false)
    await wrapper.find('button.toggler').trigger('click')
    expect(wrapper.findAll('.comments-item').length).toBe(6)
  })

  it('exclude extra fetches', async () => {
    const issue = {
      body: 'test-body',
      user: {
        login: 'test-login'
      }
    }
    const wrapper = mount(feed, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })
    await wrapper.find('button.toggler').trigger('click')
    expect(wrapper.emitted().loadIssues).toBeUndefined()
  })

})
