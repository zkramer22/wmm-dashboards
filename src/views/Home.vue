<template>
  <section id="home">
    <!-- <div v-if="!$auth.isAuthenticated" class="greeting-div">
      <h2>Welcome! Let's get started. <br>
        Log in using your provided WMM credentials.</h2>
    </div> -->
    <img alt="Westcott Multimedia logo" src="@/assets/westcott-logo.png">
    <div class="greeting-div">
      <h2>We get the right message<br>
       to the right audience<br>
        at the right time.
      </h2>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss">
  #home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .greeting-div {
      // position: absolute;
      // margin-top: 100px;
      z-index: 1;
      width: 800px;
      top: 0;
    }
    img {
      // position: absolute;
      top: 0px;
      max-width: 500px;
      height: auto;
      margin: 50px auto 0;
      opacity: 0.3;
      z-index: 0;
    }
  }
</style>
