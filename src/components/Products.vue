<template>

 <div >
<section class="hero is-large has-bg-img">
   <div class="hero-body"> 
     <div class=" has-text-centered"> 
  <img class="logoHeader" src="/img/logo-blanco-02.png" alt="logo the urban jungle">
   </div>
    </div>
     </section>

<div class="container">


    <!-- Products -->
    <div class="columns is-multiline mt-5" id="products">
      <div class="column is-4" v-for="p in computedProductList" :key="p.id">
        
        <!-- Item -->
        <div class="card has-equal-height">
          <!-- image -->
          <div class="image-card">
            <div class="image has-spacing image">
              <img alt="product logo" :src="p.data.img">
            </div>
          </div>
          <!-- content -->
          <div class="card-content">
            <div class="content">
              <!-- description -->
              <h3 class="title">{{ p.data.name }}</h3>
              <p class="subtitle">$ {{ p.data.price * p.qty }}</p>
              <p>{{p.data.text}}</p>
              <!-- counter -->
              <div class="counter">
                <button @click="decrQty(p.id)" :disabled="p.qty === 1"><i class="mdi mdi-minus"></i></button>
                {{ p.qty }}
                <button @click="incrQty(p.id)"><i class="mdi mdi-plus"></i></button>
              </div>
              <button @click="addToCart(p)" class="button is-pulled-right is-black">
                <i class="mdi mdi-cart"></i>
              </button>
              <div class="is-clearfix"></div>
            </div>
          </div>
        </div>
        <!-- End Item  -->
      </div>
      </div>
    </div>
    <!-- End Product -->

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Products',
  components: {},
  props: {},
  data() {
    return {
      search: '',
    }
  },
  methods: {
    incrQty(id) {
      let idx = this.products.map(p => p.id).indexOf(id)
      this.products[idx].qty++
    },
    decrQty(id) {
      let idx = this.products.map(p => p.id).indexOf(id)
      if(this.products[idx].qty > 1) {
        this.products[idx].qty--
      }
    },
    addToCart(product) {
      // push a copy of product to the cart
      let p = JSON.parse(JSON.stringify(product))
      this.$store.dispatch('addToCart', p)
      // reset qty
      product.qty = 1
    },
  },
  computed: {
    ...mapState(['products']),
    computedProductList() {
      return this.products.filter(p => {
        return p.data.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  watch: {},
  created() {
    this.$store.dispatch('getProducts')
  },
  mounted() {}
}
</script>

<style lang="scss">
 .has-bg-img {
   background-image: url('https://fotos.subefotos.com/3a14657df591636fb39169a81c49be4ao.jpg');
   height: 100vh;
   background-size: cover;
   background-position: top;
 }

 .logoHeader{
   height: 400px;
 }

 .hero-body {
   padding-top: 10%!important;
 }

</style>