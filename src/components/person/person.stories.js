import person from './person.vue'

export default {
  title: 'person',
  component: { person }
}

export const defaultView = () => ({
  components: { person },
  template: `
  <person avatarImgSrc="https://placehold.co/300x300" userName="joshua_l" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}