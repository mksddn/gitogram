<template>
    <div class="c-menu">
        <a class="home-icon" href="#">
            <icon name="home" />
        </a>
        <a class="profile-icon" href="#">
            <img src="https://placehold.co/300x300" alt="Profile" class="profile-icon__image">
        </a>
        <a class="signOut-icon" href="#">
            <icon name="signOut" />
        </a>
    </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'menu',
  components: {
    icon
  }
}
</script>

<style scoped lang="scss" src="./menu.scss" ></style>
