<template lang="html">
  <div class="container">
    <iframe :src="url" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
export default {
  name: 'AirtableForm',
  props: {
    url: String
  }
}
</script>

<style lang="scss" scoped>

</style>
