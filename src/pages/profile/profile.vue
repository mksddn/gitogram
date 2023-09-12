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
                  <span class="profile__info-count">{{ user.public_repos }}</span> repos
                </div>
                <div class="profile__info-right">
                  <span class="profile__info-count">{{ starred.length }}</span>
                  <router-link :to="{ name: 'watchers' }" class="profile__right-link"> watchers</router-link>
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
          <h2 class="profile__title">Repositories</h2>
          <div class="profile__right-count">{{ user.public_repos }}</div>
        </div>
        <div class="profile__wrap">
          <ul class="profile__list">
            <li class="profile__item" v-for="item in repos" :key="item.id">
              <repository :title="item.name" :description="item.description" :starsNumber="item.stargazers_count"
                :forksNumber="item.forks_count" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { pageHeader } from '@/components/pageHeader'
import { menu } from '@/components/menu'
import { user } from '@/components/user'
import { repository } from '@/components/repository'
import useUser from '@/composables/useUser.js'
import useRepos from '@/composables/useRepos.js'
import useStarred from '@/composables/useStarred.js'

export default {
  name: 'profile',
  components: {
    topline,
    pageHeader,
    mainMenu: menu,
    userComp: user,
    repository
  },
  setup() {
    const { user } = useUser()
    const { repos } = useRepos()
    const { starred } = useStarred()
    return {
      user,
      repos,
      starred
    }
  }
}
</script>

<style src="./profile.scss" lang="scss" scoped></style>
