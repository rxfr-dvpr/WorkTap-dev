<template>
  <div class="developer-menu">
    <p>developer-mode</p>
    <button @click="sign">sign</button>
    <button @click="clear">clear</button>
  </div>

  <router-view/>

  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },
  methods: {
    sign() {
      localStorage.setItem('signed', true)
      alert('signed')
    },
    clear() {
      localStorage.clear()
      alert('cleared')
    }
  },
  mounted() {
    window.oncontextmenu = () => {
      return false;
    }
  }
}
</script>

<style lang="scss">

.developer-menu {
  position: fixed;
  top: 10%;
  left: 5%;
  background: rgba($color: #000000, $alpha: 0.4);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 15px;
  border-radius: 10px;

  button {
    max-width: 100px;
    width: 100%;
    cursor: pointer;
  }
}

</style>
