<template>
  <div class="modal" v-bind:class="{'is-active': showModal}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p v-if="$store.getters.shoppingCart.list !=''" class="modal-card-title">Tus plantitas:</p>
        <p v-else class="modal-card-title">Tu carrito está vacío :(</p>
        <button class="delete" aria-label="close" @click="showModal=false"></button>
      </header>
      <section class="modal-card-body" v-if="$store.getters.shoppingCart.list !=''">
        <div>
          <ul>
            <li v-for="p in $store.getters.shoppingCart.list" :key="p.id">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <!-- IMAGEN -->
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="p.data.img" alt="Placeholder image">
                      </figure>
                    </div>
                    <!-- PRODUCTOS -->
                    <div class="media-content">
                      <p class="title is-5">{{ p.data.name }}</p>
                      <p class="subtitle is-6">$ {{ p.data.price * p.qt }}</p>
                    </div>
                    <p>
                      {{ p.qty }} x $ {{ p.data.price }} &nbsp;
                    </p>
                    <button class="button is-black is-small" @click="$store.dispatch('removeFromCart', p.id)">
                      <span class="icon is-small is-left">
                        <i class="mdi mdi-18px mdi-delete"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <!-- TOTAL -->
        <div>
          <div>
            <div class="is-pulled-right">
              <p class="title is-4">
                Total: $ {{ $store.getters.shoppingCart.total }}
              </p>
            </div>
            <div>
              <button class="button is-black" data-testId='clearcart' @click="$store.dispatch('clearCart')">
                Adios Carrito
              </button>
            </div>
          </div>
        </div>
        <!-- Conteido-->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-black" @click="showModal=false">Volver</button>
        <button v-if="$store.getters.shoppingCart.list != ''" class="button is-success is-pulled-right">Finalizar Compra</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartDetail',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    showModal: {
      get () { return this.$store.getters.showCart },
      set (val) { this.$store.dispatch('updateShowCart', val) }
    },
  },
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>

.green {
  color: #0C6802;
}

</style>