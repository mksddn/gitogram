<template>
  <div class="c-story-post-item" :class="{ active }">
    <div class="stories-container">
      <div class="header">
        <div class="progress">
          <progress-bar :activated="active" @onFinish="$emit('onProgressFinish')" />
        </div>
        <div class="user">
          <person :avatarImgSrc="data.userAvatar" :userName="data.userName" />
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner />
        </div>
        <div class="info" v-else>
          <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
          <placeholder v-else />
        </div>
      </div>
      <div class="button">
        <xButton />
      </div>
    </div>
    <div class="arrows-wrapper">
      <button class="btn btn-next" v-if="btnsShown.includes('next')" @click="$emit('onNextSlide')">
        <span class="icon">
          <icon name="arrowLeft" />
        </span>
      </button>
      <button class="btn btn-prev" v-if="btnsShown.includes('prev')" @click="$emit('onPrevSlide')">
        <span class="icon">
          <icon name="arrowLeft" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { button } from '../button'
import { person } from '../person'
import { progressBar } from '../progress'
import { icon } from '../../icons'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'

export default {
  name: 'storyPostItem',
  components: {
    xButton: button,
    person,
    progressBar,
    icon,
    placeholder,
    spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator(value) {
        return value.every(item => item == 'next' || item == 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="scss" src="./slide.scss"></style>