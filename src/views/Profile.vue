<template lang="html">
  <section class="profile-wrapper">
    <div class="container">
      <div class="user-info-wrapper">
        <h2 style="margin: 30px auto 0 auto">{{ $auth.user.name }}'s Profile</h2>
      </div>

      <div class="profile-link-wrapper" v-if="$auth.user.name === 'SixShooter' || $auth.user.name === 'admin'">
        <router-link class="router-link" :to="{ name: 'sixshooter-artist', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #ff6d6d">Ad</h2>
          </div>
          <p>Artist Dashboard</p>
        </router-link>
        <!-- <router-link :to="{ name: 'sixshooter-label', params: {} }">Label Dashboard</router-link> -->
        <router-link class="router-link" :to="{ name: 'sixshooter-adtracker', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #6ddbff">At</h2>
          </div>
          <p>Ad Tracker</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'sixshooter-roster', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: lightgreen">Mr</h2>
          </div>
          <p>My Roster</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'sixshooter-ad-content', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: rebeccapurple">Ac</h2>
          </div>
          <p>Ad Content</p>
        </router-link>
      </div>

      <div class="profile-link-wrapper" v-if="$auth.user.name === 'EOne' || $auth.user.name === 'admin'">
        <router-link :to="{ name: 'eone-artist', params: {} }">
          Artist Dashboard
        </router-link>
        <router-link :to="{ name: 'eone-label', params: {} }">
          Label Dashboard
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
  .profile-wrapper {
    .user-info-wrapper {

    }
    .profile-link-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .router-link {
        display: block;
        margin: 30px;
        width: 200px;
        height: auto;
        transition: filter .1s ease-out;
        &:hover {
          filter: brightness(0.7);
        }
        &:visited {
          color: inherit;
        }
        .link-img-container {
          border-radius: 20px;
          overflow: hidden;
          img {
            width: 200px;
            height: 200px;
            max-width: 100%;
          }
          h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 50px;
            margin: 0 auto;
            width: 200px;
            height: 200px;
            color: white;
          }
        }
      }
    }
  }
</style>
