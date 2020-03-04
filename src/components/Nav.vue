<template lang="html">
  <nav id="nav">
    <div class="container">
      <router-link id="home-link" to="/"><h1>WMM Dashboards</h1></router-link>

      <router-link v-if="$auth.isAuthenticated"
      :to="{ name: 'profile', params: {} }">Profile</router-link>

      <div v-if="!$auth.loading">
        <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
        <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    login() {
      this.$auth.loginWithRedirect()
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
    button {
      
    }
    height: 80px;
    padding: 0 20px;
    .container {
      width: 100%;
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #home-link, h1 {
      text-decoration: none;
    }
  }
</style>
