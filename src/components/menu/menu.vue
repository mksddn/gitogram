<template>
    <div class="c-menu">
        <a class="home-icon" href="#">
            <icon name="home" />
        </a>
        <router-link class="profile-icon" :to="{ name:'profile' }">
            <img :src="userAvatar.avatar_url" alt="Profile" class="profile-icon__image">
        </router-link>
        <a @click.prevent="logout" class="signOut-icon" href="#">
            <icon name="signOut" />
        </a>
        <button @click="logout"></button>
    </div>
</template>

<script>
import { icon } from '../../icons'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'menuComp',
    components: {
        icon
    },
    methods: {
        ...mapActions({
            getUserData: 'userData/getUserData',
            logout: 'auth/logout'
        })
    },
    async mounted() {
        await this.getUserData()
    },
    computed: {
        ...mapState({
            userAvatar: state => state.userData.userData
        })
    }
}
</script>

<style scoped lang="scss" src="./menu.scss" ></style>
