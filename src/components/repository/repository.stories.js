import repository from './repository.vue'

export default {
  title: 'repository',
  component: { repository },
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    },
    description: {
      control: {
        type: 'text'
      }
    },
    starsNumber: {
      control: {
        type: 'number'
      }
    },
    forksNumber: {
      control: {
        type: 'number'
      }
    }
  }
}

const template = (args) => ({
  components: { repository },
  data() {
    return { args }
  },
  template: `
    <repository v-bind="args" />
    `
})

export const defaultView = template.bind({})

defaultView.args = {
  title: "OldTweetDeck",
  description: "Returns old TweetDeck, for free!",
  starsNumber: "351",
  forksNumber: "5"
}
