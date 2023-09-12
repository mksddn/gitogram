<template>
  <div class="user__git-wr">
    <!-- <user-git :name="name" :avatar="avatar">
      <template #type>
        <div class="user__git-type">{{ type }}</div>
      </template>
    </user-git> -->
    <person :avatarImgSrc="avatar" :userName="name">
      <template #type>
        <div class="user__git-type">{{ type }}</div>
      </template>
    </person>
    <div class="profile__item-btn">
      <xButton @click="$emit('onUnFollow', id)" text="Following" hoverText="Unfollow" />
    </div>
  </div>
</template>

<script>
import { person } from '@/components/person'
import { xButton } from '../button'

export default {
  name: 'followedItem',
  components: {
    person,
    xButton
  },
  props: {
    avatar: String,
    name: String,
    type: String,
    id: Number
  }
}
</script>

<style src="./followedItem.scss" lang="scss" scoped></style>
