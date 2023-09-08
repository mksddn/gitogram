<template>
  <button :class="[
    'c-button', `${theme}`
  ]">
    <span class="btn-text">
      {{ text }}
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'xButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style scoped lang="scss" src="./button.scss"></style>