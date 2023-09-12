<template>
  <div class="user__git-wrap">
    <div class="avatar__wrap">
      <person :avatarImgSrc="avatar" alt="avatar" class="post__item-avatar" />
    </div>
    <div class="user__git-info">
      <span class="post__item-name">{{ name }}</span>
      <slot name="info"></slot>
      <slot name="type"></slot>
    </div>
  </div>
</template>

<script>
import { person } from '../person'

export default {
  name: 'user',
  components: {
    person
  },
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
