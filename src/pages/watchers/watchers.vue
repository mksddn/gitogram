<template>
  <div class="topline">
    <topline>
      <template #headline>
        <page-header />
        <mainMenu />
      </template>
    </topline>
  </div>
  <div class="x-container">
    <div class="profile">
      <div class="profile__left">
        <h2 class="profile__title">My profile</h2>
        <div class="profile__wrap">
          <userComp :name="user.login" :avatar="user.avatar_url">
            <template #info>
              <div class="profile__info">
                <div class="profile__info-left">
                  <span class="profile__info-count">{{ user.public_repos }}</span>
                  <router-link :to="{ name: 'profile' }" class="profile__right-link"> repos</router-link>
                </div>
                <div class="profile__info-right">
                  <span class="profile__info-count">{{ starred.length }}</span> watchers
                </div>
              </div>
              <div class="profile__name">
                {{ user.name }}
              </div>
            </template>
          </userComp>
        </div>
      </div>
      <div class="profile__right">
        <div class="profile__right-wrap">
          <h2 class="profile__title">Following</h2>
          <div class="profile__right-count">{{ starred.length }}</div>
        </div>
        <ul class="profile__right-list">
          <li class="profile__right-item" v-for="item in starred" :key="item.id">
            <div class="user__git-wr">
              <followedItem :name="item.owner.login" :id="item.id" :avatar="item.owner.avatar_url" :type="item.owner.type"
                @onUnFollow="unFollow(item)" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { pageHeader } from '@/components/pageHeader'
import { menu } from '@/components/menu'
import { user } from '@/components/user'
import { followedItem } from '@/components/followedItem'

import useUser from '../../composables/useUser.js'
import useRepos from '../../composables/useRepos.js'
import useStarred from '../../composables/useStarred.js'
import { useStore } from 'vuex'
export default {
  name: 'watchers',
  components: {
    topline,
    pageHeader,
    mainMenu: menu,
    userComp: user,
    followedItem,
  },
  setup() {
    const { user } = useUser()
    const { repos } = useRepos()
    const { starred } = useStarred()
    const { dispatch } = useStore()

    const unFollow = async (repo) => {
      await dispatch('starred/unFollow', repo.id)
    }
    return {
      user,
      repos,
      starred,
      unFollow
    }
  }
}
</script>

<style src="@/pages/profile/profile.scss" lang="scss" scoped></style>
