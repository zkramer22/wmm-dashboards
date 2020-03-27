<template lang="html">
  <section class="airtable-wrapper">
    <div class="container">
      <div class="form-show-button" v-if="modalUrl" v-show="!this.modalOpen" @click="switchModal">
        <span>+</span>
      </div>
      <div class="form-show-button close" v-if="modalUrl" v-show="this.modalOpen" @click="switchModal">
        <span>x</span>
      </div>
      <div class="form-show-button reload" @click="reloadTable">
        <img alt="reload" src="../assets/reload.png"/>
      </div>
      <iframe id="airtable-embed" :src="url" :width="width" :height="height"
              frameborder="0" onmousewheel=""></iframe>
      <AirtableForm id="form-modal-wrap" :url="modalUrl"/>
    </div>
  </section>
</template>

<script>
import AirtableForm from './AirtableForm.vue'
export default {
  name: 'AirtableEmbed',
  components: {
    AirtableForm
  },
  props: {
    width: String,
    height: String,
    url: String,
    modalUrl: String
  },
  methods: {
    switchModal() {
      console.log('hello');
      this.modalOpen = !this.modalOpen
      const modal = document.getElementById('form-modal-wrap')
      if (this.modalOpen) {
        modal.classList.add('active')
      }
      else {
        modal.classList.remove('active')
        this.reloadTable()
      }
    },
    reloadTable() {
      // hacky way to reload an iframe, even cross-origin. Cool
      document.getElementById('airtable-embed').src = document.getElementById('airtable-embed').src
    }
  },
  data() {
    return {
      modalOpen: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .airtable-wrapper {
    height: calc(100vh - 105px);
    // height: calc(100vh - 82px);
    .container {
      height: 100%;
      position: relative;
      .form-show-button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        top: 5px;
        left: 450px;
        width: 40px;
        height: 35px;
        border: 1px solid lightgray;
        background-color: transparent;
        transition: background-color .1s linear;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
        span {
          font-size: 26px;
        }
        &.close {
          left: unset;
          right: 100px;
          z-index: 3;
          background-color: white;
          color: black;
          border-radius: 5px;
        }
        &.reload {
          left: 500px;
          img {
            width: 50%;
            height: auto;
          }
        }
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
    #form-modal-wrap {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      left: 0;
      opacity: 0;
      height: 100%;
      user-select: none;
      pointer-events: none;
      position: absolute;
      transition: opacity .5s linear;
      &.active {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
</style>
