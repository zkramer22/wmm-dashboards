<template lang="html">
  <section class="profile-wrapper">
    <div class="container">
      <div class="user-info-wrapper">
        <h1 style="margin: 0 auto">{{ $auth.user.name }}'s Profile</h1>
      </div>

      <div class="" v-if="$auth.user.name === 'admin'">
        <p>select a user's profile to emulate:</p>
        <div class="admin-emu-selector">
          <div class="emu-choice" @click="adminSwitchProfile(0)">Sixshooter</div>
          <div class="emu-choice" @click="adminSwitchProfile(1)">EOne</div>
        </div>
      </div>

      <div class="profile-link-wrapper" v-if="$auth.user.name === 'SixShooter' || emu === 0">
        <router-link class="router-link" :to="{ name: 'sixshooter-artist', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #ff6d6d">Ad</h2>
          </div>
          <p>Artist Dashboard</p>
        </router-link>
        <!-- <router-link class="router-link" :to="{ name: 'sixshooter-label', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #ff9e6d">Dd</h2>
          </div>
          <p>Label Dashboard</p>
        </router-link> -->
        <!-- <router-link class="router-link" :to="{ name: 'sixshooter-adtracker', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #6ddbff">At</h2>
          </div>
          <p>Ad Tracker</p>
        </router-link> -->
        <router-link class="router-link" :to="{ name: 'sixshooter-marketing-actions', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #fdff6a">Ma</h2>
          </div>
          <p>Marketing Actions</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'sixshooter-roster', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #90EE90">Mr</h2>
          </div>
          <p>My Roster</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'sixshooter-ad-content', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #663399">Ac</h2>
          </div>
          <p>Ad Content</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'sixshooter-bugs', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #b5b5b5">Bt</h2>
          </div>
          <p>Bug Tracker</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'sixshooter-sys-prefs', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #ff9633">Sp</h2>
          </div>
          <p>System Preferences</p>
        </router-link>
      </div>

      <div class="profile-link-wrapper" v-if="$auth.user.name === 'EOne' || emu === 1">
        <router-link class="router-link" :to="{ name: 'eone-artist', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #ff6d6d">Ad</h2>
          </div>
          <p>Artist Dashboard</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'eone-label', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #ff9e6d">Dd</h2>
          </div>
          <p>Distributor Dashboard</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'eone-adtracker', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #6ddbff">At</h2>
          </div>
          <p>Ad Tracker</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'eone-marketing-actions', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #fdff6a">Ma</h2>
          </div>
          <p>Marketing Actions</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'eone-roster', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #90EE90">Mr</h2>
          </div>
          <p>My Roster</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'eone-ad-content', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #663399">Ac</h2>
          </div>
          <p>Ad Content</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'eone-bugs', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #b5b5b5">Bt</h2>
          </div>
          <p>Bug Tracker</p>
        </router-link>
        <router-link class="router-link" :to="{ name: 'eone-sys-prefs', params: {} }">
          <div class="link-img-container">
            <h2 style="background-color: #ff9633">Sp</h2>
          </div>
          <p>System Preferences</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    adminSwitchProfile(selection) {
      if (this.$auth.user.name === 'admin') {
        const emuChoices = document.getElementsByClassName('emu-choice')
        emuChoices.forEach(emu => emu.classList.remove('active'))
        this.emu = selection
        emuChoices[this.emu].classList.add('active')
      }
      else {
        return
      }
    }
  },
  data() {
    return {
      emu: null
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
  .profile-wrapper {
    .user-info-wrapper {
      margin: 35px auto;
      h1 {
        font-size: 30px;
      }
    }
    .admin-emu-selector {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .emu-choice {
        margin: 10px 20px;
        border: 2px solid black;
        box-shadow: 0px 4px 2px 0px lightgrey;
        border-radius: 10px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        user-select: none;
        cursor: pointer;
        transition: background-color .1s linear;
        &.active {
          background-color: lightgreen;
        }
      }
    }
    .profile-link-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 25px auto;
      .router-link {
        display: block;
        margin: 0 15px auto;
        width: 200px;
        height: auto;
        transition: filter .1s ease-out;
        color: #2c3e50;
        &:hover {
          filter: brightness(0.7);
        }
        &:visited {
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
            border: 2px solid #2c3e50;
            border-radius: 20px;
            margin: 0 auto;
            width: auto;
            height: 200px;
            color: white;
            // -webkit-text-stroke: 2px #2c3e50;
            text-shadow: -2px 3px 0 #2c3e50,
                          1px 1px 0 #2c3e50,
                         1px -1px 0 #2c3e50,
                        -1px -1px 0 #2c3e50;
          }
        }
      }
    }
  }
</style>
