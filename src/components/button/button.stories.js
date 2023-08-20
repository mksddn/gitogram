import button from './button.vue'

export default {
  title: 'button',
  component: { button },
  arfTypes: {
    text: {
      control: {
        type: 'text'
      }
    }
  }
}

const template = (args) => ({
  components: { xButton: button },
  data() {
    return { args }
  },
  template: `
        <x-button v-bind="args"></x-button>
    `
})

export const defaultView = template.bind({})

defaultView.args = {
  text: 'Follow me'
}