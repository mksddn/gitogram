import statistic from './statistic.vue'

export default {
  title: 'statistic',
  component: { statistic },
  argTypes: {
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
  components: { statistic },
  data() {
    return { args }
  },
  template: `
    <statistic class="statistic" v-bind="args" />
    `
})

export const defaultView = template.bind({})

defaultView.args = {
  starsNumber: '634',
  forksNumber: '12'
}