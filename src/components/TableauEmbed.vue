<template lang="html">
  <div class="dashboard-wrapper">
    <div class="container">
      <iframe id="dashboard-iframe" :src="url" :width="width" :height="height"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SixshooterArtist',
  props: {
    width: String,
    height: String,
    url: String
  },
  methods: {
    adjustLoginBox() {
      // const iframes = document.getElementsByTagName('iframe')
      // console.log(iframes);
      // const containerInner = iframes[0].contentWindow.document.querySelectorAll('tb-container-inner')[0]
      // console.log(containerInner);
    }
  },
  mounted() {
    this.adjustLoginBox()
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-wrapper {
    height: calc(100vh - 100px);
    overflow-y: hidden;
    overflow-x: scroll;
    .container {
      height: 100%;
      iframe {
        border: 1px solid #ccc;
        margin-top: -27px;
      }
    }
  }
</style>
