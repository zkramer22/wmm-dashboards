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
a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
</style>
