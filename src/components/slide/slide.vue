<template>
  <div class="wrapper">
    <progress-bar />
    <div class="avatar-container">
      <person avatarImgSrc="https://placehold.co/300x300" userName="joshua_l" />
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
    <div class="button-wrapper">
      <xButton />
    </div>
  </div>
</template>

<script>
import { button } from '../button'
import { person } from '../person'
import { progressBar } from '../progress'

export default {
  name: 'slide',
  components: {
    xButton: button,
    person,
    progressBar
  }
}
</script>

<style scoped lang="scss" src="./slide.scss"></style>