<template>
  <div class="c-page-header">
    <div class="logoIcon">
      <icon name="logo" />
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons/'

export default {
  name: 'page-header',
  components: {
    icon
  }
}
</script>

<style scoped lang="scss" src="./pageHeader.scss"></style>
