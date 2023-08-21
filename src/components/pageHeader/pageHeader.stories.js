import pageHeader from './pageHeader.vue'

export default {
  title: 'pageHeader',
  component: { pageHeader },
}

const template = (args) => ({
  components: { pageHeader },
  data() {
    return { args }
  },
  template: `
    <page-header />
    `
})

export const defaultView = template.bind({})
