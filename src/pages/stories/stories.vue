<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="goToFeeds">
          <icon name="logoWhite" />
        </button>
        <button class="close-btn" @click="goToFeeds">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <storiesSlider :initialSlide="Number($route.params.initialSlide)" />
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'

export default {
  name: 'stories',
  components: {
    icon,
    storiesSlider
  },
  methods: {
    goToFeeds () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped src="./stories.scss"></style>
