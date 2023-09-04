<template>
  <router-view />
</template>

<script>
import { stories } from './pages/stories/'

export default {
  name: 'App',
  components: {
    stories
  }
}
</script>

<style src="./global.scss" lang="scss"></style>
