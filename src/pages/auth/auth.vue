<template>
  <div class="auth">
    <div class="auth-right">
      <div class="wrap">
        <div class="logo">
          <icon name="logo" />
        </div>
        <div class="desc">
          More than just one repository.
          This is our digital world.
        </div>
        <div class="btn">
          <xButton @click="getCode" text="Authorize with GitHub">
            <icon name="gh" />
          </xButton>
        </div>
      </div>
    </div>
    <div class="auth-left">
      <img src="device.png" alt="" class="content">
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons/'
import { xButton } from '@/components/button'
import env from '@/env'
import { mapActions } from 'vuex'

export default {
  name: 'AuthPage',
  components: {
    icon,
    xButton
  },
  methods: {
    getCode() {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo, user')
      window.location.href = `${githubAuthApi}?${params}`
    },
    ...mapActions({
      getToken: 'auth/getToken'
    })
  },
  async created() {
    await this.getToken()
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      this.$router.replace({ name: 'root' })
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>