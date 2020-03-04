<template lang="html">
  <div class="airtable-wrapper">
    <div class="container">
      <iframe class="airtable-embed" :src="url" :width="width" :height="height"
              frameborder="0" onmousewheel=""></iframe>
    </div>
  </div>
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
    height: calc(100vh - 100px);
    .container {
      height: 100%;
    }
    iframe {
      background: transparent;
      border: 1px solid #ccc;
    }
  }
</style>
