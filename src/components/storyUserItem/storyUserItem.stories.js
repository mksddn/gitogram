import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem',
  component: { storyUserItem },
  argTypes: {
    avatar: {
      control: {
        type: 'text'
      }
    },
    username: {
      control: {
        type: 'text'
      }
    },
    onPress: {
      action: 'onPress',
      description: 'fires when click on item'
    }
  }
}

const template = (args) => ({
  components: { storyUserItem },
  data() {
    return { args }
  },
  template: `
    <story-user-item v-bind="args" @onPress="args.onPress" />
    `
})

export const defaultView = template.bind({})

defaultView.args = {
  avatar: 'https://placehold.co/300x300',
  username: 'Josh'
}