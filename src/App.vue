<template>
  <div id="app" class="is-family-sans-serif">
    <navbar :brand="'The Urban Jungle.cl'"/>
    <footer></footer>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
}
</script>
