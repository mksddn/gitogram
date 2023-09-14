<template>
  <div class="c-feed">
    <person :avatarImgSrc="avatarImgSrc" :userName="userName" />
    <slot />
    <toggler class="toggler" @onToggle='toggle' />
    <div class="comments" v-if="shown">
      <placeholder v-if="isLoading" />
      <ul class="comments-list" v-else>
        <li class="comments-item" v-for="comment in issues" :key="comment.id">
          <comment :text="comment.body" :username="comment.user.login" />
        </li>
      </ul>
    </div>
    <div class="feed-date">{{ formatedDate.toLocaleDateString() }}</div>
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import { person } from '../person'
import { placeholder } from '../placeholder'

export default {
  name: 'feed-item',
  components: {
    toggler,
    comment,
    person,
    placeholder
  },
  props: {
    userName: {
      type: String,
      requeried: true
    },
    avatarImgSrc: {
      type: String,
      requeried: true
    },
    date: {
      type: String,
      required: true
    },
    issues: {
      type: Array,
      default: []
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  emits: ['loadIssues'],
  data() {
    return {
      shown: false
    }
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened
      // isOpened ? this.$emit('loadIssues') : null
      if (isOpened && this.issues.length < 1) {
        this.$emit('loadIssues')
      }
    }
  },
  computed: {
    formatedDate() {
      return new Date(this.date)
    }
  }
}
</script>

<style scoped lang="scss" src="./feed.scss"></style>
