<template>
  <div class="topline">
    <topline>
      <template #headline>
        <page-header />
        <mainMenu />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="(story, ndx) in trendings.data" :key="story.id">
            <story-user-item :avatar="story.owner.avatar_url" :username="story.owner.login"
              @onPress="handlePress(story.id)" />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="x-container page-content">
    <ul class="feeds">
      <li class="feeds__item" v-for="item in trendings.data" :key="item.id">
        <feed class="feed" :userName="item.owner.login" :avatarImgSrc="item.owner.avatar_url">
          <repository :title="item.name" :description="item.description" :starsNumber="item.stargazers_count"
            :forksNumber="item.forks_count" />
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
import { mapState, mapActions, mapGetters } from 'vuex';

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
  data() {
    return {
      stories,
      items: []
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings
    }),
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings'
    }),
    trigger() {
      this.fetchTrendings()
    },
    handlePress(value) {
      this.$router.push({name: 'stories', params: {initialSlide: value}})
    }
  },
  mounted() {
    this.$store.dispatch('trendings/fetchTrendings')
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
