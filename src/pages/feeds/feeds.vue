<template>
  <div class="topline">
    <topline>
      <template #headline>
        <page-header />
        <mainMenu />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item :avatar="story.avatar" :username="story.username" @onPress="handlePress(story.id)" />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="x-container page-content">
    <ul class="feeds">
      <li class="feeds__item">
        <feed class="feed">
          <repository title="Vue.js" description="JavaScript framework for building interactive web applications ⚡" />
        </feed>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { storyUserItem } from '@/components/storyUserItem'
import stories from '@/pages/feeds/data.json'
import { feed } from '@/components/feed'
import { pageHeader } from '@/components/pageHeader'
import { menu } from '@/components/menu'
import { repository } from '@/components/repository'

export default {
  name: 'feeds',
  components: {
    topline,
    mainMenu: menu,
    storyUserItem,
    feed,
    pageHeader,
    repository
  },
  data () {
    return {
      stories
    }
  },
  methods: {
    handlePress (value) {
      console.log(`User's ID: ${value}`)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
