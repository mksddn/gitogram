import comment from './comment.vue'

export default {
  title: 'comment',
  component: { comment },
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    },
    username: {
      control: {
        type: 'text'
      }
    }
  }
}

const template = (args) => ({
  components: { comment },
  data() {
    return { args }
  },
  template: `
    <comment v-bind="args" />
    `
})

export const defaultView = template.bind({})

defaultView.args = {
  text: "Enable performance measuring in production, at the user's request",
  username: "joshua_l"
}
