<template>
  <button :class="[
    'c-button', 'theme-green'
  ]">
    <span class="btn-text">
      {{ text }}
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    text: {
      type: String,
      default: 'Follow'
    }
  }
}
</script>

<style scoped lang="scss" src="./button.scss"></style>