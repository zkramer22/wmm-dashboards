<template lang="html">
  <div class="dashboard-wrapper">
    <iframe id="dashboard-iframe" :src="url" width="1100" height="4050"></iframe>
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
      url: 'https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/SixshooterDashboard?:embed=yes:toolbar=no'
    }
  },
  methods: {

  },
  mounted() {
    window.addEventListener('load', () => {
      var iframe = document.getElementById("dashboard-iframe")
      console.log(iframe);
      var cont = iframe.contentWindow.document.querySelectorAll('tb-container-inner')[0]
      console.log(cont);
    })
  }
}
</script>

<style lang="css" scoped>
</style>
