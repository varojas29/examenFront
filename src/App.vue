<template>
  <div id="app" class="is-family-sans-serif">
    <navbar :brand="'The Urban Jungle.cl'"/> 
    <router-view/>
      <div>
        <Footer></Footer>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Navbar
  },
}
</script>

<style lang="scss" scoped>

</style>