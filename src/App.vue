<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  import Nav from './components/Nav'

  export default {
    name: 'App',
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideup {
  0% {
    top: 20px;
    opacity: 0;
    box-shadow: 0 0 0 0 darkgray;
  }
  100% {
    top: 0px;
    opacity: 1;
    box-shadow: 0 2px 5px 7px darkgray;
  }
}
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: inherit;
}
button {
  margin: 0;
  padding: 7px 10px;
  font-family: inherit;
  font-size: 14px;
}
#app {
  font-family: Futura, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // height: 100%;
}
section, nav {
  animation: fadein .5s ease-out;
}
.container {
  max-width: 1140px;
  padding: 0 20px;
  margin: 0 auto;
}
a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
}
</style>
