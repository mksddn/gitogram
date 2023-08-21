import menuComp from './menu.vue'

export default {
  title: 'menu',
  component: { menuComp },
}

const template = (args) => ({
  components: { menuComp },
  data() {
    return { args }
  },
  template: `
    <menu-comp />
    `
})

export const defaultView = template.bind({})
