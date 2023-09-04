<template>
  <div class="c-feed">
    <person :avatarImgSrc="avatarImgSrc" :userName="userName" />
    <slot />
    <toggler class="toggler" @onToggle='toggle' />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="comment in comments" :key="comment.username">
          <comment :text="comment.text" :username="comment.username" />
        </li>
      </ul>
    </div>
    <div class="feed-date">15 MAY</div>
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import { person } from '../person'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment,
    person
  },
  props: {
    userName: {
      type: String,
      requeried: true
    },
    avatarImgSrc: {
      type: String,
      requeried: true
    }
  },
  data() {
    return {
      shown: true,
      comments: [
        {
          username: 'joshua_l',
          text: "Enable performance measuring in production, at the user's request"
        },
        {
          username: 'Camille',
          text: "It's Impossible to Rename an Inherited Slot"
        },
        {
          username: 'Marselle',
          text: 'transition-group with flex parent causes removed items to fly'
        }
      ]
    }
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style scoped lang="scss" src="./feed.scss"></style>
