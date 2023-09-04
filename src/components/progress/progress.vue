<template>
  <div :class={active} class="c-progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>

export default {
  name: 'progressBar',
  props: {
		activated: {
			type: Boolean,
			required: true
		}
	},
  data() {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish() {
      this.$emit('onFinish')
      this.active = false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.active = this.activated;
      }, 100);
    })

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  updated () {
    this.active = !!this.activated
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style scoped lang="scss" src="./progress.scss"></style>