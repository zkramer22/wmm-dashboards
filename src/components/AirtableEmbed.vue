<template lang="html">
  <section class="airtable-wrapper">
    <div class="container">
      <iframe class="airtable-embed" :src="url" :width="width" :height="height"
              frameborder="0" onmousewheel=""></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AirtableEmbed',
  props: {
    width: String,
    height: String,
    url: String
  }
}
</script>

<style lang="scss" scoped>
  .airtable-wrapper {
    height: calc(100vh - 105px);
    // height: calc(100vh - 82px);
    .container {
      height: 100%;
    }
    iframe {
      top: 0px;
      position: relative;
      background: transparent;
      border: 1px solid #ccc;
      animation: slideup .5s ease-out;
      box-shadow: 0 2px 5px 4px darkgray;
    }
  }
</style>
