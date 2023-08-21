import toggler from './toggler.vue'

export default {
  title: 'toggler',
  component: { toggler },
  argTypes: {
    onToggle: {
      action: 'onToggle',
      description: 'toggle visibility of some content'
    }
  }
}

const template = (args) => ({
  components: { toggler },
  data() {
    return { args }
  },
  template: `
  <toggler class="toggler" @onToggle='args.onToggle' />
    `
})

export const defaultView = template.bind({})