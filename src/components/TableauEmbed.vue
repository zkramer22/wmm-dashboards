<template lang="html">
  <section class="dashboard-wrapper">
    <div class="container">
      <iframe id="dashboard-iframe" :src="url" :width="width" :height="height"></iframe>
    </div>
  </section>
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
    checkIframeLoaded() {
    // Get a handle to the iframe element
    var iframe = document.getElementById('dashboard-iframe');
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Check if loading is complete
    if (  iframeDoc.readyState  == 'complete' ) {
      //iframe.contentWindow.alert("Hello");
      iframe.contentWindow.onload = function(){

      };
      // The loading is complete, call the function we want executed once the iframe is loaded
      this.afterLoading();
      return;
    }

      // If we are here, it is not loaded. Set things up so we check   the status again in 100 milliseconds
      window.setTimeout(this.checkIframeLoaded, 100);
    },
    afterLoading(){
      console.log('hurrr');
    }
  },
  mounted() {
    // this.checkIframeLoaded()
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-wrapper {
    // height: calc(100vh - 100px);
    height: calc(100vh - 82px);
    overflow-y: hidden;
    overflow-x: scroll;
    .container {
      height: 100%;
      iframe {
        top: 0px;
        position: relative;
        border: 1px solid #ccc;
        margin-top: -27px;
        animation: slideup .5s ease-out;
        box-shadow: 0 2px 5px 4px darkgray;
      }
    }
  }
</style>
