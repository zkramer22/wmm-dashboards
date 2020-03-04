<template lang="html">
  <div class="profile-wrapper">
    <div class="user-info-wrapper">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>

    <div class="" v-if="$auth.user.name === 'SixShooter' || $auth.user.name === 'admin'">
      <router-link :to="{ name: 'sixshooter-artist', params: {} }">Artist Dashboard</router-link>
      <router-link :to="{ name: 'sixshooter-label', params: {} }">Label Dashboard</router-link>
    </div>

    <div class="" v-if="$auth.user.name === 'EOne' || $auth.user.name === 'admin'">
      <router-link :to="{ name: 'eone-artist', params: {} }">Artist Dashboard</router-link>
      <router-link :to="{ name: 'eone-label', params: {} }">Label Dashboard</router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
</style>
