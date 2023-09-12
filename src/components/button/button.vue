<template>
  <button :class="[
    'c-button', `${theme}`
  ]" @mouseover="onHover" @mouseleave="unHover">
    <span class="btn-text">
      {{ btnText }}
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
    },
    hoverText: {
      type: String
    }
  },
  data() {
    return {
      btnText: this.text,
      theme: this.theme
    }
  },
  methods: {
    onHover() {
      this.btnText = this.hoverText
      this.theme = 'grey'
    },
    unHover() {
      this.btnText = this.text
      this.theme = 'green'
    }
  }
}
</script>

<style scoped lang="scss" src="./button.scss"></style>