<template>
  <nav class="navbar has-background-black is-fixed-top" role="navigation" aria-label="main navigation">    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong class="blanco">{{ brand }}</strong> <i class="hoja mdi mdi-leaf"></i></router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu"  :class="{'is-active': displayMenu}" @click="displayMenu = !displayMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!--  -->
      <div id="navbarMenu" class="navbar-menu" :class="{'is-active': displayMenu}">
          <div class="navbar-end">
            <!-- Shopping cart -->
            <a class="navbar-item" data-testId='cart' @click="showCart">
              <span class="icon blanco">
                <i class="mdi mdi-32px mdi-cart"></i>
                <span class=" blanco tag is-link" v-if="$store.getters.shoppingCart.list.length > 0">
                  {{ $store.getters.shoppingCart.list.length }}
                </span>
              </span>
            </a>
            <!-- Login -->
            <router-link v-if="!isLoggedIn" to="/login" class="navbar-item"> Ingresa </router-link>
            <div v-else class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link blanco">
                  <span class="icon blanco">
                    <i class="blanco mdi mdi-32px mdi-account"></i>
                  </span>
                  {{ getCurrentUser ? getCurrentUser.email : ''}}
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Preferencias
                </a>
                <a class="navbar-item" @click="showCart">
                  Ver Carrito
                </a>
                <hr class="navbar-divider">
                <router-link class="navbar-item" to="/create">
                  <span @click="displayMenu = !displayMenu">Añadir productos</span>
                </router-link>
                <hr class="navbar-divider">
                <a class="navbar-item" @click="logout">
                  Cerrar Sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      <!--  -->
    </div>
    <!-- container --> 
  </nav>
</template>

<script>
import Firebase from 'firebase';

export default {
  name: 'Navbar',
  components: {},
  props: {
    brand: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      displayMenu: false,
    }
  },
  methods: {
    showCart(event) {
      event.preventDefault();
      this.$store.dispatch('updateShowCart', true)
    },
    logout() {
      Firebase.auth().signOut().then( () => {
        this.$router.push('login')
        this.$store.dispatch('updateUser', false)
        this.displayMenu = false
      })
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    getCurrentUser(){
      return Firebase.auth().currentUser ? Firebase.auth().currentUser : ''
    }
  },
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
nav {
  height: 3.25rem;
}
.navbar-end{
  padding: 4px
}
.blanco{
  color:white!important;
}

.hoja {
  color:white;
  padding-left: 10px;
}
</style>