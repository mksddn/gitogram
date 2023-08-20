import progressBar from './progress.vue'

export default {
  title: 'progress',
  component: { progressBar },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

export const defaultView = (args) => ({
  components: { progressBar },
  data() {
    return { args }
  },
  template: `
        <progress-bar @onFinish="args.onFinish" ></progress-bar>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}