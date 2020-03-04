<template lang="html">
  <div class="dashboard-wrapper">
    <iframe id="dashboard-iframe" :src="url" width="1100" height="5350"></iframe>
    <!-- <vue-friendly-iframe id="vue-friendly-iframe" :src="url" :width="1000" :height="5000">
         </vue-friendly-iframe> -->
  </div>
  <!-- <Tableau
    :url="url"
    :height="1000"
    ref="tableau">
  </Tableau> -->

    <!-- <div id="vizContainer"></div> -->
</template>

<script>
export default {
  name: 'SixshooterArtist',
  components: {
    // Tableau
  },
  data() {
    return {
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/TDSArtistDashboard?:embed=yes:toolbar=no'
    }
  },
  methods: {

  },
  mounted() {
    setTimeout(() => {
      const tb = document.querySelectorAll('.tb-container-inner')[0]
      console.log(tb);
    }, 500)
  }
}
</script>

<style lang="scss">
  .dashboard-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    iframe {
      border: none;
      margin-top: -27px;
      // .tb-container {
      //   .tb-container-inner {
      //     position: absolute;
      //     top: 100px !important;
      //     right: 0;
      //     left: 0;
      //     bottom: 0;
      //   }
      // }
    }
  }
</style>
