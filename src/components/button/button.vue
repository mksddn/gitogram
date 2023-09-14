<template>
  <button :class="[
    'c-button', `${color}`
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
      type: String,
      default: ''
    }
  },
  data() {
    return {
      btnText: this.text,
      color: this.theme
    }
  },
  methods: {
    onHover() {
      if (!this.hoverText == '') {
        this.btnText = this.hoverText
      } else {
        this.btnText = this.text
      }
      this.color = 'grey'
    },
    unHover() {
      this.btnText = this.text
      this.color = 'green'
    }
  }
}
</script>

<style scoped lang="scss" src="./button.scss"></style>