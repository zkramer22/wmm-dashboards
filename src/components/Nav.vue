<template lang="html">
  <nav id="nav">
    <div class="nav-container">
      <div id="nav-left">
        <router-link id="home-link" to="/"><h1>WMM Dashboards</h1></router-link>
      </div>
      <div id="nav-middle">
        <p class="hi" style="user-select: none" v-if="$auth.isAuthenticated">hi, {{$auth.user.name}}</p>
      </div>

      <div id="nav-right">
        <router-link v-if="$auth.isAuthenticated" class="nav-link"
        :to="{ name: 'profile', params: {} }">Profile</router-link>

        <div v-if="!$auth.loading">
          <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
          <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
        </div>
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
    position: relative;
    z-index: 100;
    height: 80px;
    // background-color: #f1f1f1;
    background-color: #f0f2f5;
    box-shadow: 0px 0px 7px 0px darkgrey;
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1140px;
      margin: 0 auto;
      padding: 0 20px;
      #nav-left {
        width: 33%;
        display: flex;
      }
      #nav-middle {
        width: 34%;
      }
      #nav-right {
        display: flex;
        justify-content: flex-end;
        width: 33%;
        .nav-link {
          margin: 0 20px;
        }
      }
    }
    #home-link, h1 {
      text-decoration: none;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: #2c3e50;
      transition: color .13s ease-out;
      &.router-link-exact-active {
        color: #4b9aee;
      }
    }
    p {
      margin: auto;
      font-size: 12px;
    }
  }
</style>
